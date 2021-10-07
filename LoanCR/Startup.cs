using System;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System.Reflection.Metadata;
using Microsoft.EntityFrameworkCore;
using LoanCR.MappingProfile;

namespace Fawry.Froms.WebAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment hostingEnvironment)
        {
            Configuration = configuration;
            //_constant = new Constant(hostingEnvironment.WebRootPath, configuration);
        }

        public IConfiguration Configuration { get; }
        //private Constant _constant;

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //var symSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Constant.AppSettings.TokenAuth.Key));
            //services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //    .AddJwtBearer(options =>
            //    {
            //        options.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            ValidateIssuer = true,
            //            ValidateAudience = true,
            //            ValidateLifetime = true,
            //            ValidateIssuerSigningKey = true,

            //            ValidIssuer = Constant.AppSettings.TokenAuth.Issuer,
            //            ValidAudience = Constant.AppSettings.TokenAuth.Audience,
            //            IssuerSigningKey = symSecurityKey,
            //            ClockSkew = TimeSpan.Zero
            //        };
            //    });

            services.Configure<IISOptions>(options =>
            {
                options.ForwardClientCertificate = false;
            });


            services.AddCors(options =>
            {
                options.AddPolicy("CORS", corsPolicyBuilder => corsPolicyBuilder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });

            services.AddControllers();

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            //services.AddScoped(x => new TokenAuthConfiguration
            //{
            //    Issuer = Constant.AppSettings.TokenAuth.Issuer,
            //    Audience = Constant.AppSettings.TokenAuth.Audience,
            //    SymmetricSecurityKey = symSecurityKey
            //});

            services.AddHttpContextAccessor();
            services.AddTransient(x =>
            {
                var context = x.GetService<IHttpContextAccessor>();
                return context.HttpContext?.User?.Identity as ClaimsIdentity;
            });
            services.AddMemoryCache();
            services.AddAutoMapper(typeof(MappingProfile));
            //services.AddDbContext<FromsContext>(options =>
            //{
            //    //options.UseLazyLoadingProxies();
            //    options.UseSqlServer(Configuration.GetConnectionString("FROMSContext"));
            //});
        }

        //public void ConfigureContainer(ContainerBuilder builder)
        //{
        //    builder.RegisterModule(new CoreRepositories.RepositoryModule());
        //    builder.RegisterModule(new Services.ServiceModule());
        //}

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                //app.UseHsts();
            }
            //dbInitializer.Migrate();
            //dbInitializer.Seed();
            //app.UseExceptionHandleMiddleware();

            app.UseCors("CORS");
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            //app.UseFileServer(new FileServerOptions
            //{
            //    FileProvider = new PhysicalFileProvider(
            //        Constant.AppSettings.Paths.WebRootPath),
            //    RequestPath = ""
            //});

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSpa(spa =>
            {

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
                    spa.Options.StartupTimeout = TimeSpan.FromSeconds(200);
                }
            });
        }
    }
}
