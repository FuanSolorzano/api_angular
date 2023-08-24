import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterPipe } from '../../filter.pipe';
import { FormsModule } from '@angular/forms';
import {Cloudinary} from '@cloudinary/url-gen'
@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {
  array!:any;
  miFormulario!: FormGroup;
  constructor( private Miservicio:ServicioService,private formBuilder: FormBuilder){
    
  }
 xd=[{name:"Hola"}]
 searchText: string = '';
 
  ngOnInit(): void {
    this.Index();
    this.miFormulario = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      location: ['', Validators.required],
      followers: ['', Validators.required],
    });
    this.searchText;
    const cld = new Cloudinary({cloud: {cloudName: 'dhzymp7eo'}});
  }
  
  
  
  
  Create(){
 this.Miservicio.Create(this.miFormulario.value).subscribe((data:any) =>{ 
    console.log(data);
    this.clearForm();
    alert('se ingresó');
    this.Index();
    
 });

  }
urlVideo="https://www.youtube.com/embed/3Pz4iuSEfTs?si=O6Kydi7NtnTO7R_k";
  Index(){
    this.Miservicio.Index().subscribe((data:any) =>{ 
       console.log(data);
       this.array = data.data;
    });
   

  }

  /* Show(id:any){
    this.Miservicio.Show(id).subscribe((data:any) =>{ 
       console.log(data.data.name);
       this.miFormulario.patchValue({
        name: data.data.name,
        description: 'Descripción de ejemplo',
        location: 'Ubicación de ejemplo',
        followers: 1000,
      });
  
    });
   

  } */
  Show(id: any) {
    console.log(id);
    this.Miservicio.Show(id).subscribe(
        (dato: any) => { 
            console.log(dato.name); // Imprime la respuesta completa para inspección
           /*  console.log(dato.data.name); */ // Intenta acceder a la propiedad name
            this.miFormulario.patchValue({
              name: dato.name,
              description: dato.description,
              location: dato.location,
              followers: dato.followers,
            });
            this.idDato = dato.id;
            this.editActive=true;
            
            
        },
        (error: any) => {
            console.error("Error fetching person:", error);
        }
    );
}
  Destroy(id:any){
    this.Miservicio.Destroy(id).subscribe((data:any) =>{ 
       console.log('Deleted Successfully Correctly');
       this.Index();
    });
   
  }
editActive=false;
idDato!:any;
  Update(){
    console.log(this.miFormulario.value);
    console.log(this.idDato);
    this.Miservicio.Update(this.miFormulario.value,this.idDato).subscribe((data:any) =>{ 
       console.log('Updated Successfully Correctly');
       this.editActive=false;
       alert('Updated Successfully Correctly');
       this.Index();
       this.clearForm();
    });
   

  }
  name!: string;
  number!: number;
OrdenarTabla(){

  //Asendente numero
  //this.array.sort((a:any, b:any) => a.followers - b.followers);

  //Desendente numero
  //this.array.sort((a:any, b:any) => b.followers - a.followers);

  //Nombre de la A a la Z
  this.array.sort((a: any, b: any) => a.name.localeCompare(b.name));

  //Nombre de la z a la A
  //this.array.sort((a: any, b: any) => b.name.localeCompare(a.name));
}

myForm!: FormGroup;

clearForm() {
  
  this.miFormulario.patchValue({
    name: '',
    description: '',
    location: '',
    followers: null,
  });
}


}
