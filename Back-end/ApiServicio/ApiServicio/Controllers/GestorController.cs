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
    public class GestorController : ControllerBase
    {
        // GET: api/<GestorController>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                gestorContext db = new gestorContext();
                List<Aula> LstAulas = db.Aula.ToList();
                return Ok(LstAulas);
            }
            catch (Exception)
            {
                return BadRequest();
            }
            
        }

        // GET api/<GestorController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<GestorController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<GestorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<GestorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
