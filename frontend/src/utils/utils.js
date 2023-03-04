export const checkBp = (s, d) => {
    if (s < 120 && d < 80) {
        return 'Normal';
    } else if (s >= 120 && s <= 129 && d < 80) {
        return 'Elevated blood pressure';
    } else if ((s >= 130 && s <= 139) || (d >= 80 && d <= 89)) {
        return 'High blood pressure (hypertension) stage 1';
    } else if (s >= 140 || d >= 90) {
        return 'High blood pressure (hypertension) stage 2';
    } else {
        return 'Hypertensive crisis';
    }
};
