<?php

namespace App\Controller\Admin;

use App\Entity\Driver;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/admin/drivers')]
class DriverController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em) {}

    #[Route('', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $drivers = $this->em->getRepository(Driver::class)->findAll();
        return $this->json(array_map(fn($d) => $this->serializeDriver($d), $drivers));
    }

    #[Route('/{id}', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $driver = $this->em->getRepository(Driver::class)->find($id);
        if (!$driver) {
            return $this->json(['error' => 'Driver not found'], 404);
        }
        return $this->json($this->serializeDriver($driver));
    }

    #[Route('', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $driver = new Driver();
        $driver->setFirstName($data['firstName'])
            ->setLastName($data['lastName'])
            ->setEmail($data['email'])
            ->setPhone($data['phone'])
            ->setLicenseNumber($data['licenseNumber'] ?? null)
            ->setAddress($data['address'] ?? null)
            ->setStatus($data['status'] ?? 'active');
        
        $this->em->persist($driver);
        $this->em->flush();
        
        return $this->json($this->serializeDriver($driver), 201);
    }

    #[Route('/{id}', methods: ['PUT'])]
    public function update(int $id, Request $request): JsonResponse
    {
        $driver = $this->em->getRepository(Driver::class)->find($id);
        if (!$driver) {
            return $this->json(['error' => 'Driver not found'], 404);
        }
        
        $data = json_decode($request->getContent(), true);
        
        $driver->setFirstName($data['firstName'] ?? $driver->getFirstName())
            ->setLastName($data['lastName'] ?? $driver->getLastName())
            ->setEmail($data['email'] ?? $driver->getEmail())
            ->setPhone($data['phone'] ?? $driver->getPhone())
            ->setLicenseNumber($data['licenseNumber'] ?? $driver->getLicenseNumber())
            ->setAddress($data['address'] ?? $driver->getAddress())
            ->setStatus($data['status'] ?? $driver->getStatus());
        
        $this->em->flush();
        
        return $this->json($this->serializeDriver($driver));
    }

    #[Route('/{id}', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $driver = $this->em->getRepository(Driver::class)->find($id);
        if (!$driver) {
            return $this->json(['error' => 'Driver not found'], 404);
        }
        
        $this->em->remove($driver);
        $this->em->flush();
        
        return $this->json(['message' => 'Driver deleted']);
    }

    private function serializeDriver(Driver $driver): array
    {
        return [
            'id' => $driver->getId(),
            'firstName' => $driver->getFirstName(),
            'lastName' => $driver->getLastName(),
            'email' => $driver->getEmail(),
            'phone' => $driver->getPhone(),
            'licenseNumber' => $driver->getLicenseNumber(),
            'address' => $driver->getAddress(),
            'status' => $driver->getStatus(),
            'createdAt' => $driver->getCreatedAt()->format('Y-m-d H:i:s'),
        ];
    }
}
