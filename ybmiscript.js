function runAnalysis() {
            const w = parseFloat(document.getElementById('weight').value);
            const hCm = parseFloat(document.getElementById('height').value);
            const hM = hCm / 100;

            if (w && hCm) {
                const bmi = (w / (hM * hM)).toFixed(1);
                document.getElementById('bmiOutput').innerText = bmi;

                document.querySelectorAll('tr').forEach(tr => tr.classList.remove('active-row'));

                let status = "";
                if (bmi < 18.5) {
                    status = "LOW DENSITY DETECTED";
                    document.getElementById('cat-under').classList.add('active-row');
                } else if (bmi < 25) {
                    status = "OPTIMAL LEVEL";
                    document.getElementById('cat-normal').classList.add('active-row');
                } else if (bmi < 30) {
                    status = "THRESHOLD WARNING";
                    document.getElementById('cat-over').classList.add('active-row');
                } else {
                    status = "SYSTEM OVERLOAD";
                    document.getElementById('cat-obese').classList.add('active-row');
                }
                document.getElementById('bmiStatus').innerText = status;

                const minIdeal = (18.5 * (hM * hM)).toFixed(1);
                const maxIdeal = (24.9 * (hM * hM)).toFixed(1);
                document.getElementById('idealBox').innerHTML = `ESTIMATED sIDEAL: <b>${minIdeal}kg - ${maxIdeal}kg</b>`;
            }
        }