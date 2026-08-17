import { Component } from '@angular/core';
import { Header } from '../../fragments/header/header';
import { Footer } from '../../fragments/footer/footer';

@Component({
  selector: 'app-nosotros',
  imports: [Header, Footer],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class Nosotros {}