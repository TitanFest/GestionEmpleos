import React, { useState } from 'react';
import '../styles/CreateJob.css';
import { FaBriefcase, FaMapMarkerAlt, FaMoneyBillWave, FaClock } from 'react-icons/fa';

const CreateJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Tiempo completo',
    description: '',
    requirements: '',
    benefits: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar los datos al backend
    console.log(jobData);
  };

  return (
    <div className="create-job-container">
      <div className="create-job-header">
        <FaBriefcase className="header-icon" />
        <h2>Crear Nueva Oferta de Empleo</h2>
      </div>

      <form onSubmit={handleSubmit} className="create-job-form">
        <div className="form-group">
          <label>
            <FaBriefcase className="input-icon" />
            Título del puesto
          </label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            placeholder="ej. Desarrollador Frontend Senior"
            required
          />
        </div>

        <div className="form-group">
          <label>
            <FaBriefcase className="input-icon" />
            Empresa
          </label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            placeholder="ej. Tech Solutions SA"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>
              <FaMapMarkerAlt className="input-icon" />
              Ubicación
            </label>
            <input
              type="text"
              name="location"
              value={jobData.location}
              onChange={handleChange}
              placeholder="ej. Lima, Perú"
              required
            />
          </div>

          <div className="form-group">
            <label>
              <FaMoneyBillWave className="input-icon" />
              Salario
            </label>
            <input
              type="text"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              placeholder="ej. S/. 3,000 - 5,000"
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            <FaClock className="input-icon" />
            Tipo de empleo
          </label>
          <select
            name="type"
            value={jobData.type}
            onChange={handleChange}
          >
            <option value="Tiempo completo">Tiempo completo</option>
            <option value="Medio tiempo">Medio tiempo</option>
            <option value="Remoto">Remoto</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Descripción del puesto</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            placeholder="Describe las responsabilidades y el rol..."
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Requisitos</label>
          <textarea
            name="requirements"
            value={jobData.requirements}
            onChange={handleChange}
            placeholder="Lista los requisitos principales..."
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Beneficios</label>
          <textarea
            name="benefits"
            value={jobData.benefits}
            onChange={handleChange}
            placeholder="Describe los beneficios ofrecidos..."
            rows="4"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn">Cancelar</button>
          <button type="submit" className="submit-btn">Publicar empleo</button>
        </div>
      </form>
    </div>
  );
};

export default CreateJob; 