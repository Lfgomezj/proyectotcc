import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  //atributos 
  public bodega:Bodega[]=[]

  //quemamos 4 zonas de bodega 
  public Bodega1:Bodega={
    id:1,
    nombre:"Bodega zonaA" ,
    correo: "zonaA@gmail.com",
    telefono: "3607080",
    Mercancia:{
      id: 1,
      nombre:"Caja A",
      referencia:"45A"
    }
  
  }

  public Bodega2:Bodega={
    id:2,
    nombre:"Bodega zonaB" ,
    correo: "zonaB@gmail.com",
    telefono: "3607025",
    Mercancia:{
      id: 2,
      nombre:"Caja A",
      referencia"90S"
  }

  public Bodega3:Bodega={
    id:3,
    nombre:"Bodega zonaC" ,
    correo: "zonaC@gmail.com",
    telefono: "3609080",
    Mercancia:{
      id: 3,
      nombre:"Caja A",
      referencia"23S",
    }
  }

  public Bodega4:Bodega={
    id:4,
    nombre:"Bodega zonaD" ,
    correo: "zonaD@gmail.com",
    telefono: "3600070",
    Mercancia:{
      id: 4,
      nombre:"Caja A",
      referencia"25M",
    }
  }

  
  public constructor(){
    //llamamos al servicio y creamos las bodegas 
    this.bodega.push(this.bodega1)
    this.bodega.push(this.bodega2)
    this.bodega.push(this.bodega3)
    this.bodega.push(this.bodega4)
    console.log(this.bodega)
    
  }
}

}
