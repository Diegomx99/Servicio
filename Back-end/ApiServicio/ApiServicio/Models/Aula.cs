using System;
using System.Collections.Generic;

namespace ApiServicio.Models
{
    public partial class Aula
    {
        public Aula()
        {
            Horario = new HashSet<Horario>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Ubicacion { get; set; }

        public virtual ICollection<Horario> Horario { get; set; }
    }
}
