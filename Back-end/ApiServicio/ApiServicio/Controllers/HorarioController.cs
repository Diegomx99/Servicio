using ApiServicio.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiServicio.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HorarioController : ControllerBase
    {
        // GET: api/<HorarioController>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                gestorContext db = new gestorContext();
                List<Horario> LstHorarios = db.Horario.ToList();
                return Ok(LstHorarios);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        // GET api/<HorarioController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<HorarioController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<HorarioController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HorarioController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
