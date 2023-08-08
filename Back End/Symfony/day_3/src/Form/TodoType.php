<?php

namespace App\Form;

use App\Entity\Todo;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class TodoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', null, [
                'attr' => ['class' => 'mt-2 form-control',
                            "placeholder" => "please type the todo name"
                        ],
            ])
            ->add('description', null, [
                'attr' => ['class' => 'form-control mt-2'],
            ])
            ->add('priority', ChoiceType::class , [
                'attr' => ['class' => 'form-control mt-2'],
                'choices'  => [
                    'Low' => 'Low',
                    'Normal' => 'Normal',
                    'High' => 'High',
                ]
            ])
            ->add('createDate', null, [
                'attr' => ['class' => 'form-control mt-2'],
                "widget" => "single_text"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Todo::class,
        ]);
    }
}
