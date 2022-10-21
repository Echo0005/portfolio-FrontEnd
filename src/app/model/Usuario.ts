export class Usuario
{
    id?: number;
    banner: string;
    nombre: string;
    titulo: string;
    descripcion: string;
    fotoPerfil: string;

    constructor(id:number, banner:string, nombre:string, titulo:string, descripcion:string, fotoPerfil:string )
    {
        this.id = id;
        this.banner = banner;
        this.nombre = nombre;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fotoPerfil = fotoPerfil;
    }
}