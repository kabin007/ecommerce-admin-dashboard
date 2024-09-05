document.getElementById('logoutBtn').addEventListener('click', function() {
    alert('Logged out successfully');
    // Add your logout functionality here
});

// You can add dynamic content to the dashboard using JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const orders = [
        { id: '#002', customer: 'Jane Doe', item: 'Burger', status: 'Pending', date: '2024-09-02' },
        { id: '#003', customer: 'Mark Smith', item: 'Pasta', status: 'Delivered', date: '2024-09-03' },
    ];

    const orderTable = document.getElementById('orderTable');
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>${order.item}</td>
            <td>${order.status}</td>
            <td>${order.date}</td>
        `;
        orderTable.appendChild(row);
    });
});