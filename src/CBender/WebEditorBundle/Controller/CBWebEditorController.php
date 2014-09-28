<?php

namespace CBender\WebEditorBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CBWebEditorController extends Controller
{
    public function indexAction()
    {
        return $this->render('CBenderWebEditorBundle:CBWebEditor:index.html.twig');
    }
}
