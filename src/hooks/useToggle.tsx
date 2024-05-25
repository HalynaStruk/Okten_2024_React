import React from "react";
import { useState, useCallback } from "react";

// Типи для хуку useToggle
type UseToggle = [boolean, () => void];

// Створення функції useToggle
function useToggle(initialValue: boolean = false): UseToggle {
    // Ініціалізуємо стан з початковим значенням
    const [value, setValue] = useState<boolean>(initialValue);

    // Використовуємо useCallback для запам'ятовування функції toggle
    function toggle(value) {
        setValue((prevValue) => !prevValue);
    }
    // Повертаємо поточне значення і функцію перемикання
    return [value, toggle];
}

export default useToggle;

