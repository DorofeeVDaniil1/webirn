

import React, { useState } from 'react';
import styles from "@/styles/Home.module.scss";


const HealthSurveyForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		height: 0,
		age: 0,
		location: '',
		lastDoctorVisit: 0,
		bloodPressure: '',
		hemoglobinLevel: '',
		takesMedication: false,
		doesExercise: false,
		hadHeadacheLastTwoWeeks: false,
		wellBeingRating: '',
	});

	const handleChange = (field: string, value: string | number | boolean) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const handleSubmit = async () => {
		try {
			const response = await fetch('/api/save-survey', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				console.log('Survey submitted successfully');
			} else {
				console.error('Survey submission failed');
			}
		} catch (error) {
			console.error('Error submitting survey:', error);
		}
	};

	return (

		<div className={styles.main}>
			<div>
				<label>Как к Вам обращаться:</label>
				<input
					type="text"
					value={formData.name}
					onChange={(e) => handleChange('name', e.target.value)}
				/>
			</div>
			<div>
				<label>Ваш рост:</label>
				<input
					type="number"
					value={formData.height}
					onChange={(e) => handleChange('height', Number(e.target.value))}
				/>
			</div>
			<div>
				<label>Ваш возраст:</label>
				<input
					type="number"
					value={formData.age}
					onChange={(e) => handleChange('age', Number(e.target.value))}
				/>
			</div>
			<div>
				<label>Место жительства:</label>
				<input
					type="text"
					value={formData.location}
					onChange={(e) => handleChange('location', e.target.value)}
				/>
			</div>
			<div>
				<label>Когда Вы были последний раз у врача (может типы врачей):</label>
				<input
					type="number"
					value={formData.lastDoctorVisit}
					onChange={(e) => handleChange('lastDoctorVisit', Number(e.target.value))}
				/>
			</div>
			<div>
				<label>Ваше давление:</label>
				<input
					type="text"
					value={formData.bloodPressure}
					onChange={(e) => handleChange('bloodPressure', e.target.value)}
				/>
			</div>
			<div>
				<label>Какой у Вас уровень гемоглобина:</label>
				<input
					type="text"
					value={formData.hemoglobinLevel}
					onChange={(e) => handleChange('hemoglobinLevel', e.target.value)}
				/>
			</div>


			<div>
				<label>За последние 2 недели у Вас болела голова?</label>
				<input
					type="checkbox"
					checked={formData.hadHeadacheLastTwoWeeks}
					onChange={() => handleChange('hadHeadacheLastTwoWeeks', !formData.hadHeadacheLastTwoWeeks)}
				/>
			</div>
			<div>
				<label>Оцените своё самочувствие:</label>
				<select
					value={formData.wellBeingRating}
					onChange={(e) => handleChange('wellBeingRating', e.target.value)}
				>
					<option value="">Выберите</option>
					<option value="Ужасно">Ужасно</option>
					<option value="Плохо">Плохо</option>
					<option value="Хорошо">Хорошо</option>
				</select>
			</div>

			<div>
				<label>Вы принимаете лекарства от давления?</label>
				<input
					type="checkbox"
					checked={formData.takesMedication}
					onChange={() => handleChange('takesMedication', !formData.takesMedication)}
				/>
			</div>
			{formData.takesMedication && (
				<div>
					<label>Опишите своё самочувствие (у Вас болит голова?):</label>
					<input
						type="text"
						value={formData.selfDescription}
						onChange={(e) => handleChange('selfDescription', e.target.value)}
					/>
				</div>
			)}
			<div>
				<label>Занимаетесь ли Вы спортом?</label>
				<input
					type="checkbox"
					checked={formData.doesExercise}
					onChange={() => handleChange('doesExercise', !formData.doesExercise)}
				/>
			</div>
			{formData.doesExercise && (
				<div>
					<label>Каким спортом Вы занимаетесь?</label>
					<input
						type="text"
						value={formData.sportType}
						onChange={(e) => handleChange('sportType', e.target.value)}
					/>
				</div>
			)}

			{formData.hadHeadacheLastTwoWeeks && (
				<div>
					<label>Сколько раз у Вас болела голова за последние 2 недели?</label>
					<input
						type="number"
						// ... предыдущие поля */value={formData.headacheFrequency}
						onChange={(e) => handleChange('headacheFrequency', Number(e.target.value))}
					/>
				</div>
			)}
			{/* ... предыдущие поля */}
			<button type="button" onClick={handleSubmit}>
				Submit Survey
			</button>

		</div>

	);
};

export default HealthSurveyForm;
