using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoTECAPI.Contextos;
using CoTECAPI.Entidades;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoTECAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class MEDIDA_SANITARIAController : Controller
    {
        private readonly AppDBContext context;
        public MEDIDA_SANITARIAController(AppDBContext context)
        {
            this.context = context;
        }
        // GET: api/<MEDIDA_SANITARIAController>
        [HttpGet]
        public IEnumerable<MEDIDA_SANITARIA> Get()
        {
            return context.MEDIDA_SANITARIA.ToList();
        }

        // GET api/<MEDIDA_SANITARIAController>/5
        [HttpGet("{id}")]
        public MEDIDA_SANITARIA Get(int id)
        {
            var centro = context.MEDIDA_SANITARIA.FirstOrDefault(p => p.IdMedidaSanitaria == id);
            return centro;
        }

        // POST api/<MEDIDA_SANITARIAController>
        [HttpPost]
        public ActionResult Post([FromBody] MEDIDA_SANITARIA value)
        {
            try
            {
                context.MEDIDA_SANITARIA.Add(value);
                context.SaveChanges();
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        // PUT api/<MEDIDA_SANITARIAController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] MEDIDA_SANITARIA value)
        {
            if (value.IdMedidaSanitaria == id)
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

        // DELETE api/<MEDIDA_SANITARIAController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var value = context.MEDIDA_SANITARIA.FirstOrDefault(p => p.IdMedidaSanitaria == id);
            if (value != null)
            {
                context.MEDIDA_SANITARIA.Remove(value);
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
