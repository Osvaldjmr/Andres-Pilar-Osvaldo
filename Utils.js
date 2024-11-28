import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc, updateDoc } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA5lhHMNpBax8EaM0dEtLP6EPccXUovHyI",
    authDomain: "equipo2611-5cc8e.firebaseapp.com",
    projectId: "equipo2611",
    storageBucket: "equipo2611.appspot.com",
    messagingSenderId: "294346304795",
    appId: "1:294346304795:web:345f6be5ab75c7cdc0b7be",
    measurementId: "G-ZWLQH9ER0T"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para obtener tareas
export async function getTasks() {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks = [];
    querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
    });
    return tasks; // Devuelve los datos como un arreglo para usarlos en React
}

// Función para insertar una tarea
export async function insertTask(task) {
    const randomId = generateRandomIdTask(20);
    await setDoc(doc(db, "tasks", randomId), task);
    return { id: randomId, ...task }; // Devuelve la tarea insertada
}

// Función para eliminar una tarea
export async function deleteTask(id) {
    await deleteDoc(doc(db, "tasks", id));
    return id; // Devuelve el ID eliminado
}

// Función para actualizar una tarea
export async function updateTask(task) {
    const taskRef = doc(db, "tasks", task.id);
    const updateData = {};
    if (task.title) updateData.title = task.title;
    if (task.description) updateData.description = task.description;

    await updateDoc(taskRef, updateData);
    return { id: task.id, ...updateData }; // Devuelve la tarea actualizada
}

// Generador de ID aleatorio
function generateRandomIdTask(num) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
