import { bodyMuscles } from '../constants';

const allMusclesToArray = () => (
    Object.keys(Object.keys(bodyMuscles).reduce((muscles, muscleGroup) => {
        bodyMuscles[muscleGroup].forEach(muscle => { muscles[muscle] = null });
        return muscles;
    }, {}))
);

export { allMusclesToArray };