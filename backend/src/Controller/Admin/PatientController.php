<?php

namespace App\Controller\Admin;

use App\Entity\Patient;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/admin/patients')]
class PatientController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em) {}

    #[Route('', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $patients = $this->em->getRepository(Patient::class)->findAll();
        return $this->json(array_map(fn($p) => $this->serializePatient($p), $patients));
    }

    #[Route('/{id}', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $patient = $this->em->getRepository(Patient::class)->find($id);
        if (!$patient) {
            return $this->json(['error' => 'Patient not found'], 404);
        }
        return $this->json($this->serializePatient($patient));
    }

    #[Route('', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $patient = new Patient();
        $patient->setFirstName($data['firstName'])
            ->setLastName($data['lastName'])
            ->setEmail($data['email'])
            ->setPhone($data['phone'])
            ->setAddress($data['address'] ?? null)
            ->setMedicalNotes($data['medicalNotes'] ?? null);
        
        if (isset($data['dateOfBirth'])) {
            $patient->setDateOfBirth(new \DateTime($data['dateOfBirth']));
        }
        
        $this->em->persist($patient);
        $this->em->flush();
        
        return $this->json($this->serializePatient($patient), 201);
    }

    #[Route('/{id}', methods: ['PUT'])]
    public function update(int $id, Request $request): JsonResponse
    {
        $patient = $this->em->getRepository(Patient::class)->find($id);
        if (!$patient) {
            return $this->json(['error' => 'Patient not found'], 404);
        }
        
        $data = json_decode($request->getContent(), true);
        
        $patient->setFirstName($data['firstName'] ?? $patient->getFirstName())
            ->setLastName($data['lastName'] ?? $patient->getLastName())
            ->setEmail($data['email'] ?? $patient->getEmail())
            ->setPhone($data['phone'] ?? $patient->getPhone())
            ->setAddress($data['address'] ?? $patient->getAddress())
            ->setMedicalNotes($data['medicalNotes'] ?? $patient->getMedicalNotes());
        
        if (isset($data['dateOfBirth'])) {
            $patient->setDateOfBirth(new \DateTime($data['dateOfBirth']));
        }
        
        $this->em->flush();
        
        return $this->json($this->serializePatient($patient));
    }

    #[Route('/{id}', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $patient = $this->em->getRepository(Patient::class)->find($id);
        if (!$patient) {
            return $this->json(['error' => 'Patient not found'], 404);
        }
        
        $this->em->remove($patient);
        $this->em->flush();
        
        return $this->json(['message' => 'Patient deleted']);
    }

    private function serializePatient(Patient $patient): array
    {
        return [
            'id' => $patient->getId(),
            'firstName' => $patient->getFirstName(),
            'lastName' => $patient->getLastName(),
            'email' => $patient->getEmail(),
            'phone' => $patient->getPhone(),
            'dateOfBirth' => $patient->getDateOfBirth()?->format('Y-m-d'),
            'address' => $patient->getAddress(),
            'medicalNotes' => $patient->getMedicalNotes(),
            'createdAt' => $patient->getCreatedAt()->format('Y-m-d H:i:s'),
        ];
    }
}
