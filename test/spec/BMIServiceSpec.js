describe('BMIService', function () {
   it('should caculate the BMI given a wight and height',function () {
      expect(BMIService.getIndex(75, 1.75)).toBe(24.489795918367346);
    }); 
    
   it('should return null for a non valid number', function () {
      expect(BMIService.getIndex('1', '')).toBe(null); 
    });    
});