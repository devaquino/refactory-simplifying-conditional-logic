// Needs Refactory
{
  if(anEmployee.seniority < 2) return 0;
  if(anEmployee.monthsDisabled > 12) return 0;
  if(anEmployee.isPartTime) return 0;
}

// Done

if(isNotEligableForDisability()) return 0;

function isNotEligableForDisability() {
  return ((anEmployee.seniority < 2)
          || (anEmployee.monthsDisabled > 12)
          || (anEmployee.isPartTime))
         );
}

// #######

// Needs Refactory
{
  if(anEmployee.onVacation)
    if(anEmployee.seniority > 10)
      return 1;
  return 0.5;
}


// Done
if((anEmployee.onVacation) && (anEmployee.seniority > 10)) return 1;

return 0.5
