using AutoMapper;
using LoanCR.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LoanCR.MappingProfile
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<EmployeeAddVM, Employee>();
            CreateMap<EmployeeEditVM, Employee>();
        }
    }
}
