        // applies taxes
        var total = total + (total * 0.22);
        // applies discount
        let discount = 0;
        if (total >= 200) {
            discount = total * 0.12;
            total + discount;
        } else if (total >= 100) {
            discount = total * 0.07;
            total + discount;
        }
        // shipping

        if (total <= 80) {
            total = total + 9;
        } else if (total >= 80) {
            total = total + 6;
        }
