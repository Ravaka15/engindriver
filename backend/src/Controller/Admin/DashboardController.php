<?php

namespace App\Controller\Admin;

use App\Entity\Appointment;
use App\Entity\Driver;
use App\Entity\Patient;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/admin/dashboard')]
class DashboardController extends AbstractController
{
    public function __construct(private EntityManagerInterface $em) {}

    #[Route('/stats', methods: ['GET'])]
    public function stats(): JsonResponse
    {
        $totalUsers = $this->em->getRepository(User::class)->count([]);
        $totalDrivers = $this->em->getRepository(Driver::class)->count([]);
        $totalPatients = $this->em->getRepository(Patient::class)->count([]);
        $totalAppointments = $this->em->getRepository(Appointment::class)->count([]);
        
        $pendingAppointments = $this->em->getRepository(Appointment::class)->count(['status' => 'pending']);
        $confirmedAppointments = $this->em->getRepository(Appointment::class)->count(['status' => 'confirmed']);
        $completedAppointments = $this->em->getRepository(Appointment::class)->count(['status' => 'completed']);
        
        $activeDrivers = $this->em->getRepository(Driver::class)->count(['status' => 'active']);
        
        return $this->json([
            'totalUsers' => $totalUsers,
            'totalDrivers' => $totalDrivers,
            'totalPatients' => $totalPatients,
            'totalAppointments' => $totalAppointments,
            'pendingAppointments' => $pendingAppointments,
            'confirmedAppointments' => $confirmedAppointments,
            'completedAppointments' => $completedAppointments,
            'activeDrivers' => $activeDrivers,
        ]);
    }

    #[Route('/recent-appointments', methods: ['GET'])]
    public function recentAppointments(): JsonResponse
    {
        $appointments = $this->em->getRepository(Appointment::class)
            ->findBy([], ['createdAt' => 'DESC'], 10);
        
        return $this->json(array_map(function($appointment) {
            return [
                'id' => $appointment->getId(),
                'patient' => $appointment->getPatient()->getFirstName() . ' ' . $appointment->getPatient()->getLastName(),
                'driver' => $appointment->getDriver() ? 
                    $appointment->getDriver()->getFirstName() . ' ' . $appointment->getDriver()->getLastName() : 
                    'Non assigné',
                'appointmentDate' => $appointment->getAppointmentDate()->format('Y-m-d H:i'),
                'status' => $appointment->getStatus(),
            ];
        }, $appointments));
    }
}
