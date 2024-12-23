<?php

namespace App\Controller;

use App\Entity\Bag;
use App\Repository\BagRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/bags')]
class BagController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SerializerInterface $serializer,
        private ValidatorInterface $validator
    ) {}

    #[Route('', methods: ['GET'])]
    public function index(BagRepository $bagRepository): JsonResponse
    {
        $bags = $bagRepository->findAll();
        return $this->json($bags, Response::HTTP_OK, [], ['groups' => 'bag:read']);
    }

    #[Route('/{id}', methods: ['GET'])]
    public function show(Bag $bag): JsonResponse
    {
        return $this->json($bag, Response::HTTP_OK, [], ['groups' => 'bag:read']);
    }

	#[Route('', methods: ['POST'])]
	public function create(Request $request): JsonResponse
	{
		try {
			// Log the incoming data
			dump($request->getContent());
			
			$bag = $this->serializer->deserialize(
				$request->getContent(),
				Bag::class,
				'json'
			);
	
			dump($bag); // Add this to see what was deserialized
	
			$errors = $this->validator->validate($bag);
			if (count($errors) > 0) {
				return $this->json($errors, Response::HTTP_BAD_REQUEST);
			}
	
			$this->entityManager->persist($bag);
			$this->entityManager->flush();
	
			return $this->json($bag, Response::HTTP_CREATED, [], ['groups' => 'bag:read']);
		} catch (\Exception $e) {
			// Log the actual error
			dump($e->getMessage());
			return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
		}
	}

    #[Route('/{id}', methods: ['PUT'])]
    public function update(Request $request, Bag $bag): JsonResponse
    {
        try {
            $this->serializer->deserialize(
                $request->getContent(),
                Bag::class,
                'json',
                ['object_to_populate' => $bag]
            );

            $errors = $this->validator->validate($bag);
            if (count($errors) > 0) {
                return $this->json($errors, Response::HTTP_BAD_REQUEST);
            }

            $this->entityManager->flush();

            return $this->json($bag, Response::HTTP_OK, [], ['groups' => 'bag:read']);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/{id}', methods: ['DELETE'])]
    public function delete(Bag $bag): JsonResponse
    {
        $this->entityManager->remove($bag);
        $this->entityManager->flush();

        return $this->json(null, Response::HTTP_NO_CONTENT);
    }
}