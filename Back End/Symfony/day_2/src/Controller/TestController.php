<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    #[Route('/', name: 'app_test')]
    public function index(): Response
    {
        $students = ["John", "Mark", "May", "Test"];
        return $this->render('test/index.html.twig', [
            "students" => $students
        ]);
    }

    #[Route('/test', name: 'test')]
    public function testPage(): Response
    {
        return $this->render('test/test.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }


    #[Route('/test2', name: 'test2')]
    public function testingPage(): Response
    {
        
        return $this->render('test/newpage.html.twig', [
            
        ]);
    }
}
