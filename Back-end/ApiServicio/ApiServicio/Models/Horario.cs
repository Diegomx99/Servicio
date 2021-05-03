using System;
using System.Collections.Generic;

namespace ApiServicio.Models
{
    public partial class Horario
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public TimeSpan? Hora { get; set; }
        public string Dia { get; set; }
        public int IdAula { get; set; }
        public string Profesor { get; set; }

        public virtual Aula IdAulaNavigation { get; set; }
    }
}
