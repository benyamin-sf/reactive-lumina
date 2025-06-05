import { services, teamMembers } from '../data';

export default function About() {
  return (
    <>
      <section class='services bg-dark'>
        <div class='container'>
          <h2 class='section-heading'>Our services</h2>
          <ul class='services-flex'>
            {services.map((service) => (
              <li key={service.id} className='service'>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section class='team'>
        <div class='container container-lg'>
          <h2 class='section-heading'>Our team</h2>
          <ul class='team-flex'>
            {teamMembers.map((member) => (
              <li key={member.id} className='team-member'>
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.job}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
