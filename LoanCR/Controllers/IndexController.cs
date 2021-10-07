using AutoMapper;
using LoanCR;
using LoanCR.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PortalWebiApiWithAngular.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class IndexController : ControllerBase
    {
        public static List<Employee> EmpList = new List<Employee>()
        {
                new Employee(1, "Amir","Team Leader" , 32 ) ,
                new Employee(2, "Christina" , "Associate SW Engineer" , 25),
                new Employee(3, "Soso" , "Backend Developer", 30)
        };

        private IConfiguration Configuration;
        private readonly IMapper _mapper;

        public IndexController(IConfiguration _configuration, IMapper mapper)
        {
            Configuration = _configuration;
            _mapper = mapper;
        }
        // GET: api/<IndexController>
        [HttpGet]
        public List<Employee> Get()
        {
            return EmpList;
        }

        // GET api/<IndexController>/5
        [HttpGet("{id}")]
        public Employee Get(int id)
        {
            return EmpList.Find(e => e.id == id);
        }

        // POST api/<IndexController>
        [HttpPost]
        public IActionResult Post(EmployeeAddVM empVM)
        {
            Employee emp = _mapper.Map<Employee>(empVM);
            Random random = new Random();
            emp.id = random.Next(1, 1000);
            EmpList.Add(emp);
            return Ok();
        }

        // PUT api/<IndexController>/5
        [HttpPut("{id}")]
        public IActionResult Put(EmployeeEditVM empToEdit)
        {
            Employee emp = _mapper.Map<Employee>(empToEdit);
            var oldEmp = EmpList.FirstOrDefault(e => e.id == emp.id);
            oldEmp.name = emp.name;
            oldEmp.age = emp.age;
            oldEmp.job = emp.job;
            return Ok();
        }

        // DELETE api/<IndexController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var emp = EmpList.Find(e => e.id == id);
            EmpList.Remove(emp);
            return Ok();
        }
    }
}
