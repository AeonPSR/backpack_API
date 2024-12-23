<?php

namespace App\Controller;

use App\Entity\Review;
use App\Repository\BagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api')]
class ReviewController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SerializerInterface $serializer,
        private ValidatorInterface $validator
    ) {}

    #[Route('/bags/{bagId}/reviews', methods: ['GET'])]
    public function getReviewsForBag(int $bagId, BagRepository $bagRepository): JsonResponse
    {
        $bag = $bagRepository->find($bagId);
        if (!$bag) {
            return $this->json(['error' => 'Bag not found'], Response::HTTP_NOT_FOUND);
        }

        return $this->json($bag->getReviews(), Response::HTTP_OK, [], ['groups' => 'review:read']);
    }

    #[Route('/bags/{bagId}/reviews', methods: ['POST'])]
    public function createReview(Request $request, int $bagId, BagRepository $bagRepository): JsonResponse
    {
        try {
            $bag = $bagRepository->find($bagId);
            if (!$bag) {
                return $this->json(['error' => 'Bag not found'], Response::HTTP_NOT_FOUND);
            }

            $review = $this->serializer->deserialize(
                $request->getContent(),
                Review::class,
                'json'
            );
            $review->setBag($bag);

            $errors = $this->validator->validate($review);
            if (count($errors) > 0) {
                return $this->json($errors, Response::HTTP_BAD_REQUEST);
            }

            $this->entityManager->persist($review);
            $this->entityManager->flush();

            return $this->json($review, Response::HTTP_CREATED, [], ['groups' => 'review:read']);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/reviews/{id}', methods: ['PUT'])]
    public function updateReview(Request $request, Review $review): JsonResponse
    {
        try {
            $this->serializer->deserialize(
                $request->getContent(),
                Review::class,
                'json',
                ['object_to_populate' => $review]
            );

            $errors = $this->validator->validate($review);
            if (count($errors) > 0) {
                return $this->json($errors, Response::HTTP_BAD_REQUEST);
            }

            $this->entityManager->flush();

            return $this->json($review, Response::HTTP_OK, [], ['groups' => 'review:read']);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/reviews/{id}', methods: ['DELETE'])]
    public function deleteReview(Review $review): JsonResponse
    {
        $this->entityManager->remove($review);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
}