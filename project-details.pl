<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eijkim Maulit - Project Details</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header class="navbar">
        <div class="container">
            <h1 class="logo">Developer Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="projects.html" class="active">Projects</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="project-details-main">
        <section class="project-details-section">
            <div class="container">
                <h2 class="project-title">Ordering System</h2>
                <p class="project-description">A fastfood ordering system built with C++ that allows customers to select items, manage orders, and process payments.</p>

                <div class="tabs">
                    <button class="tab-button active" data-tab="code">Code</button>
                    <button class="tab-button" data-tab="pseudo-code">Pseudo Code</button>
                    <button class="tab-button" data-tab="diagram">Diagram</button>
                </div>

                <div id="code" class="tab-content active">
                    <h3>C++ Source Code</h3>
                    <div class="code-block-wrapper">
                        <button class="run-code-btn">Run Code</button>
                        <pre class="code-block">
<code class="language-cpp">
#include &lt;iostream&gt;
#include &lt;iomanip&gt;
#include &lt;vector&gt;
#include &lt;string&gt;
using namespace std;

struct Item {
    string name;
    double price;
    int quantity;
};

vector&lt;Item&gt; orders;
double total = 0;

void menu() {
    cout &lt;&lt; "\n\n\t\t==============================\n";
    cout &lt;&lt; "\t\t\tFASTFOOD MENU\n";
    cout &lt;&lt; "\t\t1. Beef Steak \tPhp 75.00\n";
    cout &lt;&lt; "\t\t2. Burger \tPhp 60.00\n";
    cout &lt;&lt; "\t\t3. Fried Chicken \tPhp 50.00\n";
    cout &lt;&lt; "\t\t4. Fries \tPhp 30.00\n";
    cout &lt;&lt; "\t\t5. Coke \tPhp 25.00\n";
    cout &lt;&lt; "\t\t6. Cancel\n";
    cout &lt;&lt; "\t\t==============================\n";
}

void order() {
    int choice;
    char again;

    cout &lt;&lt; "\n\nEnter the number of your choice: ";
    cin &gt;&gt; choice;

    if (choice &lt; 1 || choice &gt; 6) {
        cout &lt;&lt; "\n\t\tInvalid choice. Please try again.\n";
        return;
    }

    Item currentItem;
    currentItem.quantity = 0; // Initialize quantity

    switch (choice) {
        case 1:
            currentItem.name = "Beef Steak";
            currentItem.price = 75.00;
            break;
        case 2:
            currentItem.name = "Burger";
            currentItem.price = 60.00;
            break;
        case 3:
            currentItem.name = "Fried Chicken";
            currentItem.price = 50.00;
            break;
        case 4:
            currentItem.name = "Fries";
            currentItem.price = 30.00;
            break;
        case 5:
            currentItem.name = "Coke";
            currentItem.price = 25.00;
            break;
        case 6:
            cout &lt;&lt; "\n\t\tOrder cancelled.\n";
            return;
    }

    cout &lt;&lt; "\n\t\tEnter quantity for " &lt;&lt; currentItem.name &lt;&lt; ": ";
    cin &gt;&gt; currentItem.quantity;

    if (currentItem.quantity &lt;= 0) {
        cout &lt;&lt; "\n\t\tQuantity must be greater than zero. Order not added.\n";
        return;
    }

    orders.push_back(currentItem);
    total += currentItem.price * currentItem.quantity;

    cout &lt;&lt; "\n\t\t" &lt;&lt; currentItem.quantity &lt;&lt; " " &lt;&lt; currentItem.name &lt;&lt; "(s) added to order.\n";
}

void viewOrders() {
    if (orders.empty()) {
        cout &lt;&lt; "\n\t\tNo orders placed yet.\n";
        return;
    }

    cout &lt;&lt; "\n\n\t\t==============================\n";
    cout &lt;&lt; "\t\t\tYOUR ORDERS\n";
    cout &lt;&lt; "\t\t==============================\n";
    cout &lt;&lt; left &lt;&lt; setw(20) &lt;&lt; "Item" &lt;&lt; setw(10) &lt;&lt; "Qty" &lt;&lt; setw(15) &lt;&lt; "Price" &lt;&lt; setw(15) &lt;&lt; "Subtotal" &lt;&lt; endl;
    cout &lt;&lt; "--------------------------------------------------\n";

    for (const auto& item : orders) {
        double subtotal = item.price * item.quantity;
        cout &lt;&lt; left &lt;&lt; setw(20) &lt;&lt; item.name &lt;&lt; setw(10) &lt;&lt; item.quantity &lt;&lt; setw(15) &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; item.price &lt;&lt; setw(15) &lt;&lt; subtotal &lt;&lt; endl;
    }
    cout &lt;&lt; "--------------------------------------------------\n";
    cout &lt;&lt; right &lt;&lt; setw(45) &lt;&lt; "Total: Php " &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; total &lt;&lt; endl;
    cout &lt;&lt; "\t\t==============================\n";
}

int main() {
    char option;
    do {
        menu();
        order();
        cout &lt;&lt; "\n\t\tDo you want to order again? (y/n): ";
        cin &gt;&gt; option;
    } while (option == 'y' || option == 'Y');

    viewOrders();

    // Simple checkout simulation
    if (total > 0) {
        double payment;
        cout &lt;&lt; "\n\t\tEnter payment amount: Php ";
        cin &gt;&gt; payment;

        if (payment >= total) {
            double change = payment - total;
            cout &lt;&lt; "\n\t\tPayment successful! Your change is Php " &lt;&lt; fixed &lt;&lt; setprecision(2) &lt;&lt; change &lt;&lt; endl;
            cout &lt;&lt; "\n\t\tThank you for your order!\n";
        } else {
            cout &lt;&lt; "\n\t\tInsufficient payment. Order cancelled.\n";
        }
    }

    return 0;
}
</code></pre>
                    </div>
                </div>

                <div id="pseudo-code" class="tab-content">
                    <h3>Pseudocode</h3>
                    <pre class="code-block">
<code class="language-pseudocode">
START
  DECLARE Item struct with name, price, quantity
  DECLARE orders as a list of Item
  DECLARE total = 0

  FUNCTION menu():
    DISPLAY "FASTFOOD MENU"
    DISPLAY menu items with prices
    DISPLAY "Cancel" option

  FUNCTION order():
    GET user choice
    IF choice is invalid THEN
      DISPLAY "Invalid choice"
      RETURN
    END IF

    CREATE currentItem based on choice
    GET quantity for currentItem
    IF quantity <= 0 THEN
      DISPLAY "Quantity must be greater than zero"
      RETURN
    END IF

    ADD currentItem to orders list
    ADD (currentItem.price * currentItem.quantity) to total
    DISPLAY confirmation

  FUNCTION viewOrders():
    IF orders is empty THEN
      DISPLAY "No orders placed"
      RETURN
    END IF

    DISPLAY "YOUR ORDERS" header
    DISPLAY table headers: Item, Qty, Price, Subtotal
    FOR EACH item in orders:
      CALCULATE subtotal = item.price * item.quantity
      DISPLAY item details and subtotal
    END FOR
    DISPLAY total amount

  MAIN PROGRAM:
    DO:
      CALL menu()
      CALL order()
      GET user input for 'order again'
    WHILE user wants to order again

    CALL viewOrders()

    IF total > 0 THEN
      GET payment amount
      IF payment >= total THEN
        CALCULATE change = payment - total
        DISPLAY "Payment successful! Your change is " + change
        DISPLAY "Thank you for your order!"
      ELSE
        DISPLAY "Insufficient payment. Order cancelled."
      END IF
    END IF
END
</code></pre>
                </div>

                <div id="diagram" class="tab-content">
                    <h3>Flowchart / Diagram Placeholder</h3>
                    <div class="diagram-placeholder">
                        <p>This is where your project diagram or flowchart would go.</p>
                        <img src="https://via.placeholder.com/800x400/1F1F2B/B06FFF?text=Flowchart+or+Diagram" alt="Project Diagram Placeholder" class="responsive-img">
                        <p>You can replace the placeholder image with your actual diagram.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2023 Eijkim Maulit. All rights reserved.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>