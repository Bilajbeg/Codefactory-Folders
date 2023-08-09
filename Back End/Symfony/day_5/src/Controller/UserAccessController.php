<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/user')]
class UserAccessController extends AbstractController
{
    #[Route('/', name: 'app_user_access')]
    public function index(ProductRepository $productRepo): Response
    {
        $user = $this->getUser();
        dd($productRepo->findAllByPrice(12));
        return $this->render('user_access/index.html.twig', [
            'products' => $productRepo->findAll(),
            "user" => $user,
            "test" => $productRepo->findAllByPrice(12)
        ]);
    }
}
