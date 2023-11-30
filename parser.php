<?php 
$fh = fopen(__DIR__ . '/example.csv', "r");
fgetcsv($fh, 0, ';');

// массив, в который данные будут сохраняться
$data = [];
while (($row = fgetcsv($fh, 0, ';')) !== false) {
    list($date, $price) = $row;

    $data[] = [
        'date' => $date,
        'price' => $price,
    ];
}

// теперь в массиве $data расположены все элементы из CSV-файла
foreach ($data as $row) {
    echo '<div class="td">
        <p class="td__days">' . $row['date'] . ' </p>
        <div class="td-price">
            <p class="td-price__num">' . $row['price'] . '</p>
            <p class="td-price__letter">₽</p>
        </div>
    </div>';
}
?>