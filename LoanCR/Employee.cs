using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanCR
{
    public class Employee
    {
        public int id { get; set; }
        public string name { get; set; }
        public string job { get; set; }
        public int age { get; set; }

        public Employee() { }
        public Employee(int _id, string _name, string _job, int _age)
        {
            id = _id;
            name = _name;
            job = _job;
            age = _age;
        }
    }
}
