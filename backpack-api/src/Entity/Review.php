<?php
namespace App\Entity;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Repository\ReviewRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReviewRepository::class)]
class Review
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['review:read', 'bag:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['review:read', 'bag:read'])]
    private ?string $Author = null;

    #[ORM\Column(length: 5000)]
    #[Groups(['review:read', 'bag:read'])]
    private ?string $Comment = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['review:read', 'bag:read'])]
    private ?int $Stars = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['review:read', 'bag:read'])]
    private ?\DateTimeInterface $Date = null;

    #[ORM\ManyToOne(inversedBy: 'reviews')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['review:read'])]
    private ?Bag $bag = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?string
    {
        return $this->Author;
    }

    public function setAuthor(string $Author): static
    {
        $this->Author = $Author;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->Comment;
    }

    public function setComment(string $Comment): static
    {
        $this->Comment = $Comment;

        return $this;
    }

    public function getStars(): ?int
    {
        return $this->Stars;
    }

    public function setStars(?int $Stars): static
    {
        $this->Stars = $Stars;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): static
    {
        $this->Date = $Date;

        return $this;
    }

    public function getBag(): ?Bag
    {
        return $this->bag;
    }

    public function setBag(?Bag $bag): static
    {
        $this->bag = $bag;

        return $this;
    }
}
