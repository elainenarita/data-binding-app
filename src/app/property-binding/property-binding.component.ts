import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = "accent";
  btnDisabled = false;
  colors: ['primary', 'accent', 'warn']
  idx = 0;

  constructor() { }

  //ngOnit: função/metódo que é executado automáticamente qdo o template for inicializada.
  //=>: sintaxe mais curta comparada a uma function expression.
  //this: para acessar um atributo declarado na classe, se quiser acessar uma variavel declarada dentro do método não precisa.
  ngOnInit(): void {
    setInterval( () => {
      this.idx = (this.idx+1) % this.colors.length;
    },
      1000)
  }

}
