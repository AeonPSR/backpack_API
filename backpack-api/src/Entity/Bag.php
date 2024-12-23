<?php

namespace App\Entity;

use Symfony\Component\Serializer\Annotation\Groups;
use App\Repository\BagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BagRepository::class)]
class Bag
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['bag:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['bag:read', 'review:read'])]
    private ?string $Name = null;

    #[ORM\Column]
    #[Groups(['bag:read'])]
    private ?float $Size = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['bag:read'])]
    private ?float $Price = null;

    #[ORM\Column]
    #[Groups(['bag:read'])]
    private ?bool $Available = null;

    /**
     * @var Collection<int, Review>
     */
    #[ORM\OneToMany(targetEntity: Review::class, mappedBy: 'bag', orphanRemoval: true)]
    #[Groups(['bag:read'])]
    private Collection $reviews;

    public function __construct()
    {
        $this->reviews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getSize(): ?float
    {
        return $this->Size;
    }

    public function setSize(float $Size): static
    {
        $this->Size = $Size;

        return $this;
    }

    public function getPrice(): ?float
    {
        return $this->Price;
    }

    public function setPrice(?float $Price): static
    {
        $this->Price = $Price;

        return $this;
    }

    public function isAvailable(): ?bool
    {
        return $this->Available;
    }

    public function setAvailable(bool $Available): static
    {
        $this->Available = $Available;

        return $this;
    }

    /**
     * @return Collection<int, Review>
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function addReview(Review $review): static
    {
        if (!$this->reviews->contains($review)) {
            $this->reviews->add($review);
            $review->setBag($this);
        }

        return $this;
    }

    public function removeReview(Review $review): static
    {
        if ($this->reviews->removeElement($review)) {
            // set the owning side to null (unless already changed)
            if ($review->getBag() === $this) {
                $review->setBag(null);
            }
        }

        return $this;
    }
}
