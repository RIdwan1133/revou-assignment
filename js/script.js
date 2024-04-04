document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");
    const resetButton = document.querySelector("button[type='reset']");
    const resultContainer = document.querySelector(".container-result");

    calculateButton.addEventListener("click", function() {
        const weightInput = parseFloat(document.querySelector("input[name='weight']").value);
        const heightInput = parseFloat(document.querySelector("input[name='height']").value);
        const ageInput = parseInt(document.querySelector("input[name='age']").value);
        const genderInput = document.querySelector("input[name='gender']:checked").value;

        // Hitung BMI
        const bmi = calculateBMI(weightInput, heightInput);

        // Menampilkan hasil
        resultContainer.innerHTML = `
            <h4>Berat Badan Lebih </h4>
            <h1>${bmi}</h1>
            <h4>Anda Memiliki Berat Badan Berlebih </h4>
            <button type="button" onclick="downloadBMIResult()">Download Hasil BMI</button>
        `;

        // Cek usia
        if (ageInput >= 18) {
            resultContainer.innerHTML += "<p>Anda sudah dewasa.</p>";
        } else {
            resultContainer.innerHTML += "<p>Anda masih di bawah umur.</p>";
        }
    });

    resetButton.addEventListener("click", function() {
        resultContainer.innerHTML = ""; // Menghapus hasil saat tombol reset diklik
    });

    function calculateBMI(weight, height) {
        return (weight / (height * height)).toFixed(2);
    }

    function downloadBMIResult() {
        // Fungsi untuk mendownload hasil BMI
        // Contoh implementasi: window.location.href = 'path/to/download/endpoint';
        alert("Mendownload hasil BMI...");
    }
});
