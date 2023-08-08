<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Product;
use App\Repository\ProductRepository;
use Doctrine\Persistence\ManagerRegistry;

class ProductController extends AbstractController
{
    #[Route('/create', name: 'app_product_create')]
    public function createAction(ManagerRegistry $em): Response
    {
        $product = new Product();
        $product->setName("Hat");
        $product->setPrice(12.33);
        $em = $em->getManager();
        $em->persist($product); // prepare your query
        $em->flush(); // run all queries

        return new Response("New record has been created");
    }

    #[Route('/products', name: 'app_product_index')]
    public function index(ProductRepository $productRepo): Response
    {
        $products = $productRepo->findAll();

        return $this->render("product/index.html.twig", [
            "products"=> $products
        ]);
    }

    #[Route('/product/{id}', name: 'app_product_details')]
    public function details(ProductRepository $productRepo, $id): Response
    {
        $products = $productRepo->findByPriceFunc(5);
        dd($products);

        return $this->render("product/details.html.twig", [
            "product"=> $products
        ]);
    }
}
