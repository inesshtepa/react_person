export const Person = ({ person }) => {
  const { name, age, isMarried, sex, partnerName } = person;
  const familyStatus =
    sex === `m` ? `${partnerName} is my wife` : `${partnerName} is my husband`;

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>

      {age > 0 && <p className="Person__age">I am {age}</p>}

      {isMarried ? (
        <p className="Person__partner">{familyStatus}</p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
