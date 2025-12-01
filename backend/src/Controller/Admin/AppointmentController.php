<?php

namespace App\Controller\Admin;

use App\Entity\Appointment;
use App\Entity\Driver;
use App\Entity\Patient;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/admin/appointments')]
class AppointmentController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em) {}

    #[Route('', methods: ['GET'])]
    public function index(): JsonResponse
    {
        $appointments = $this->em->getRepository(Appointment::class)->findAll();
        return $this->json(array_map(fn($a) => $this->serializeAppointment($a), $appointments));
    }

    #[Route('/{id}', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $appointment = $this->em->getRepository(Appointment::class)->find($id);
        if (!$appointment) {
            return $this->json(['error' => 'Appointment not found'], 404);
        }
        return $this->json($this->serializeAppointment($appointment));
    }

    #[Route('', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        
        $patient = $this->em->getRepository(Patient::class)->find($data['patientId']);
        if (!$patient) {
            return $this->json(['error' => 'Patient not found'], 404);
        }
        
        $appointment = new Appointment();
        $appointment->setPatient($patient)
            ->setAppointmentDate(new \DateTime($data['appointmentDate']))
            ->setPickupAddress($data['pickupAddress'])
            ->setDestinationAddress($data['destinationAddress'])
            ->setStatus($data['status'] ?? 'pending')
            ->setNotes($data['notes'] ?? null);
        
        if (isset($data['driverId'])) {
            $driver = $this->em->getRepository(Driver::class)->find($data['driverId']);
            if ($driver) {
                $appointment->setDriver($driver);
            }
        }
        
        $this->em->persist($appointment);
        $this->em->flush();
        
        return $this->json($this->serializeAppointment($appointment), 201);
    }

    #[Route('/{id}', methods: ['PUT'])]
    public function update(int $id, Request $request): JsonResponse
    {
        $appointment = $this->em->getRepository(Appointment::class)->find($id);
        if (!$appointment) {
            return $this->json(['error' => 'Appointment not found'], 404);
        }
        
        $data = json_decode($request->getContent(), true);
        
        if (isset($data['appointmentDate'])) {
            $appointment->setAppointmentDate(new \DateTime($data['appointmentDate']));
        }
        
        $appointment->setPickupAddress($data['pickupAddress'] ?? $appointment->getPickupAddress())
            ->setDestinationAddress($data['destinationAddress'] ?? $appointment->getDestinationAddress())
            ->setStatus($data['status'] ?? $appointment->getStatus())
            ->setNotes($data['notes'] ?? $appointment->getNotes());
        
        if (isset($data['driverId'])) {
            $driver = $this->em->getRepository(Driver::class)->find($data['driverId']);
            $appointment->setDriver($driver);
        }
        
        $this->em->flush();
        
        return $this->json($this->serializeAppointment($appointment));
    }

    #[Route('/{id}', methods: ['DELETE'])]
    public function delete(int $id): JsonResponse
    {
        $appointment = $this->em->getRepository(Appointment::class)->find($id);
        if (!$appointment) {
            return $this->json(['error' => 'Appointment not found'], 404);
        }
        
        $this->em->remove($appointment);
        $this->em->flush();
        
        return $this->json(['message' => 'Appointment deleted']);
    }

    private function serializeAppointment(Appointment $appointment): array
    {
        return [
            'id' => $appointment->getId(),
            'patient' => [
                'id' => $appointment->getPatient()->getId(),
                'firstName' => $appointment->getPatient()->getFirstName(),
                'lastName' => $appointment->getPatient()->getLastName(),
            ],
            'driver' => $appointment->getDriver() ? [
                'id' => $appointment->getDriver()->getId(),
                'firstName' => $appointment->getDriver()->getFirstName(),
                'lastName' => $appointment->getDriver()->getLastName(),
            ] : null,
            'appointmentDate' => $appointment->getAppointmentDate()->format('Y-m-d H:i:s'),
            'pickupAddress' => $appointment->getPickupAddress(),
            'destinationAddress' => $appointment->getDestinationAddress(),
            'status' => $appointment->getStatus(),
            'notes' => $appointment->getNotes(),
            'createdAt' => $appointment->getCreatedAt()->format('Y-m-d H:i:s'),
        ];
    }
}
