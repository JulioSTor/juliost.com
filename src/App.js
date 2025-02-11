import React from 'react';
import logo from './img/logo.webp';
import './App.scss';

function App() {

	return (

		<div className="App">

			<header>

				<div className="container logo">

					<div className="row justify-content-center">

						<div className="col-10 col-sm-10 col-md-6 col-lg-4">

							<img src={logo} alt="Julio S Torremocha Logo" />

						</div>

					</div>

				</div>

			</header>

			<div className="container" id="hero">

				<div className="row align-items-center">

					<div className="col-12 col-md-6 col-lg-7">
						
						<h1 className='heroTitle'>
							I'm Julio, a Web Developer <span className="transparent">with 5+ years of experience <br></br>based in Berlin.</span>
						</h1>

						<p className='heroSubtitle'>
							I work at <a aria-label="Interhyp Gruppe" href="https://www.interhyp.de/" target="_blank" rel="noopener noreferrer">
								Interhyp Gruppe</a> as a Software Engineer. I'm really passionate about design, functionality and usability.
						</p>

						<p className='heroSubtitle'>
							I speak fluent English, German and Spanish. When I'm not coding, you can probably find me running, climbing or playing guitar.
						</p>

					</div>

				</div>

			</div>
			
			<div className="container section" id="skillset">

				<p className="sectionHeader">Skillset</p>

				<div className="row">

					<div className="col-12 col-md-4">
						
						<h1 className='mb-5 white'>
							<span className="line">Web Development, </span>
							<span className="line">Interface Design & </span>
							<span className="line">User Experience</span>
						</h1>

					</div>

					<div className="col-12 col-md-8">

						<p className="skillsetText">I like everything related to design, functionality and usability. 
							I enjoy creating cool user experiences and designing appealing digital products. 
							I usually look for new opportunities on projects with interesting design systems.
						</p>

						<div className="skillsetIcons row pt-4">

							<div className="col-2">
								<i className="fa-brands fa-react fa-2xl"></i>
							</div>

							<div className="col-2">
								<i className="fa-brands fa-square-js fa-2xl"></i>
							</div>

							<div className="col-2">
								<i className="fa-brands fa-html5 fa-2xl"></i>
							</div>

							<div className="col-2">
								<i className="fa-brands fa-css3-alt fa-2xl"></i>
							</div>

							<div className="col-2">
								<i className="fa-brands fa-bootstrap fa-2xl"></i>
							</div>

							<div className="col-2">
								<i className="fa-brands fa-vuejs fa-2xl"></i>
							</div>

						</div>

					</div>

				</div>

			</div>

			<div className="container section" id="experience">

				<p className="sectionHeader">Work Experience</p>

				<div className="row">

					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							Interhyp Gruppe<br></br><span className="transparent">Software Engineer</span>
						</h1>
							
						<ul>
							<li>I develop web apps mainly with React and TypeScript</li>
						</ul>

					</div>

					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							Sony Music Entertainment<br></br><span className="transparent">Frontend Developer</span>
						</h1>
							
						<ul>
							<li>I built websites using HTML5, CSS3, JavaScript and Vue/Nuxt</li>
						</ul>

					</div>
					
					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							<span className="line">Solid White Design &</span> <span className="line">Digital Media</span><br></br><span className="transparent">Frontend Developer</span>
						</h1>
							
						<ul>
							<li>I developed web apps using React/Redux and JavaScript</li>
						</ul>

					</div>
					
					<div className="col-12 col-md-6">
						
						<h1 className='mb-3 white'>
							Talleres Sanchez<br></br><span className="transparent">Web Developer, IT Admin</span>
						</h1>
							
						<ul>
							<li>I worked at the family company as a Web Dev and IT Admin</li>
						</ul>

					</div>

				</div>

			</div>

			<div className="container section" id="education">

				<p className="sectionHeader">Education</p>

				<div className="row">

					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							Bachelor of Science in Computer Science<br></br><span className="transparent">University of Salamanca, Spain</span>
						</h1>

							<ul>
								<li>Major: Web Development, Graphic User Interfaces and Data</li>
								<li>Bachelor Dissertation: “Beer Styles Recommender and Visualization System”</li>
								<li>Dissertation grade: 1.0 (95%)</li>
							</ul>

					</div>
					
					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
						Professional Diploma in Piano Performance<br></br><span className="transparent">Conservatorio Profesional de Música in Salamanca, Spain</span>
						</h1>

					</div>

				</div>

				<div className="row">

					<div className="col-12 col-md-6 mb-5">
						
						<h1 className='mb-3 white'>
							International Scolarship<br></br><span className="transparent">University of Wolverhampton, United Kingdom</span>
						</h1>

					</div>
					
					<div className="col-12 col-md-6">
						
						<h1 className='mb-3 white'>
							General Certificate of Education: Science and Technology<br></br><span className="transparent">IES Lucía de Medrano in Salamanca, Spain</span>
						</h1>

					</div>

				</div>

			</div>
					
			<div className="container section" id="contact">

				<p className="sectionHeader">Contact</p>

				<div className="socialContainer row text-center">
					
					<div className="col-2 col-md-4"></div>
					
					<div className="col-2 col-md-1 mx-auto">

						<a aria-label="Email link" href="mailto:juliostorremocha@gmail.com">
							<span className="fa-stack socials">
								<i className="fa-regular fa-circle fa-stack-2x"></i>
								<i className="fa-solid fa-envelope fa-stack-1x"></i>
							</span>
						</a>

					</div>

					<div className="col-2 col-md-1 mx-auto">

						<a aria-label="LinkedIn link" href="https://www.linkedin.com/in/juliostor" target="_blank" rel="noopener noreferrer">
							<span className="fa-stack socials">
								<i className="fa-regular fa-circle fa-stack-2x"></i>
								<i className="fa-brands fa-linkedin-in fa-stack-1x"></i>
							</span>
						</a>

					</div>

					<div className="col-2 col-md-1 mx-auto">

						<a aria-label="X link" href="https://x.com/juliostor" target="_blank" rel="noopener noreferrer">
							<span className="fa-stack socials">
								<i className="fa-regular fa-circle fa-stack-2x"></i>
								<i className="fa-brands fa-x-twitter fa-stack-1x"></i>
							</span>
						</a>

					</div>

					<div className="col-2 col-md-1 mx-auto">

						<a aria-label="GitHub link" href="https://github.com/JulioSTor" target="_blank" rel="noopener noreferrer">
							<span className="fa-stack socials">
								<i className="fa-regular fa-circle fa-stack-2x"></i>
								<i className="fa-brands fa-github fa-stack-1x"></i>
							</span>
						</a>

					</div>

					<div className="col-2 col-md-4"></div>

				</div>
				
			</div>

						
			<footer className="container section" id="footer">

				<div className="row align-items-center">

					<div className="col-12 col-md-6 mx-auto pt-2">

						<p>
							Built with ❤️ in Berlin
						</p>

					</div>

					<div className="col-12 col-md-6 mx-auto">

						<img src={logo} alt="Julio S Torremocha Logo" className="logo" />

					</div>

				</div>

			</footer>

		</div>

	);

}

export default App;
