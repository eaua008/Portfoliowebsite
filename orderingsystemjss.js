let orders = [];
let total = 0;

document.querySelectorAll(".item").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));

    const qty = parseInt(prompt(`How many ${name}(s) would you like to buy?`));
    if (!qty || qty <= 0) return alert("Invalid quantity!");

    const subtotal = price * qty;
    total += subtotal;

    orders.push({ name, price, qty, subtotal });
    updateOrderList();
  });
});

function updateOrderList() {
  const tbody = document.getElementById("order-list");
  tbody.innerHTML = "";

  orders.forEach(order => {
    const row = `
      <tr>
        <td>${order.name}</td>
        <td>${order.qty}</td>
        <td>₱${order.price.toFixed(2)}</td>
        <td>₱${order.subtotal.toFixed(2)}</td>
      </tr>`;
    tbody.innerHTML += row;
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

document.getElementById("pay-btn").addEventListener("click", () => {
  const payment = parseFloat(document.getElementById("payment").value);
  const changeText = document.getElementById("change");
  const receiptSection = document.getElementById("receipt-content");

  if (orders.length === 0) {
    changeText.textContent = "⚠️ You have no orders yet!";
    changeText.style.color = "red";
    return;
  }

  if (isNaN(payment) || payment <= 0) {
    changeText.textContent = "⚠️ Please enter a valid payment amount.";
    changeText.style.color = "red";
    return;
  }

  if (payment < total) {
    changeText.textContent = `❌ Not enough payment! You still owe ₱${(total - payment).toFixed(2)}.`;
    changeText.style.color = "red";
  } else {
    const change = payment - total;
    changeText.textContent = `✅ Payment successful! Change: ₱${change.toFixed(2)}.`;
    changeText.style.color = "green";

  
    let receiptHTML = `
      <p><strong>Fastfood Ordering System</strong></p>
      <p>------------------------------------</p>
      ${orders
        .map(o => `<div class="receipt-item"><span>${o.name} x${o.qty}</span><span>₱${o.subtotal.toFixed(2)}</span></div>`)
        .join("")}
      <p>------------------------------------</p>
      <p><strong>Total:</strong> ₱${total.toFixed(2)}</p>
      <p><strong>Payment:</strong> ₱${payment.toFixed(2)}</p>
      <p><strong>Change:</strong> ₱${change.toFixed(2)}</p>
      <p>------------------------------------</p>
      <p>🕒 ${new Date().toLocaleString()}</p>
      <p>Thank you for ordering! 🍔</p>
    `;

    receiptSection.innerHTML = receiptHTML;
    return receiptHTML

    
    orders = [];
    total = 0;
    updateOrderList();
    document.getElementById("payment").value = "";
  }

  
})

document.getElementById("reset1").addEventListener("click", () => {
    orders = [];
    total = 0;
    updateOrderList();
    document.getElementById("payment").value = "";
  });

  document.getElementById("resetagain").addEventListener("click", () => {
    orders = [];
    total = 0;
    updateOrderList();
    document.getElementById("payment").value = "";
  });

  
  // --- Tab Switching Functionality ---
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(button => {
        button.addEventListener('click', () => {
            tabs.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // --- Load external HTML into Overview tab ---
    window.addEventListener('DOMContentLoaded', () => {
        fetch('orderingsystemproj1.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('overview-content').innerHTML = data;
            })
            .catch(err => {
                document.getElementById('overview-content').innerHTML = "<p>Unable to load overview content.</p>";
            });
    });