let address = {
  street: 'Nazarbekova',
  number: '24',
  city: 'Shymkent',
  zipCode: 160013,
  showAddress() {
    return `${this.city}, ${this.street} ${this.number}, ${this.zipCode}`;
  },
};
console.log(address.showAddress());
