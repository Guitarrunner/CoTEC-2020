using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoTECAPI.Contextos;
using CoTECAPI.Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoTECAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class CENTROHOSPITALARIOController : Controller
    {
        private readonly AppDBContext context;
        public CENTROHOSPITALARIOController(AppDBContext context)
        {
            this.context = context;
        }
        // GET api/<CENTROHOSPITALARIOController>
        [HttpGet]
        public IEnumerable<CENTRO_HOSPITALARIO> Get()
        {
            return context.CENTRO_HOSPITALARIO.ToList();
        }

        // GET api/<CENTROHOSPITALARIOController>/5
        [HttpGet("{id}")]
        public CENTRO_HOSPITALARIO Get(int id)
        {
            var centro = context.CENTRO_HOSPITALARIO.FirstOrDefault(p => p.IdCentrohospitalario == id);
            return centro;
        }

        // POST api/<CENTROHOSPITALARIOController>
        [HttpPost]
        public ActionResult Post([FromBody] CENTRO_HOSPITALARIO value)
        {
            try
            {
                context.CENTRO_HOSPITALARIO.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<CENTROHOSPITALARIOController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] CENTRO_HOSPITALARIO value)
        {
            if (value.IdCentrohospitalario == id)
            {
                context.Entry(value).State = EntityState.Modified;
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        } 

        // DELETE api/<CENTROHOSPITALARIOController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.CENTRO_HOSPITALARIO.FirstOrDefault(p => p.IdCentrohospitalario == id);
            if (value != null)
            {
                context.CENTRO_HOSPITALARIO.Remove(value);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
