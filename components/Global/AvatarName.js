function AvatarName({ name }) {
  const [firstName, lastName] = name.split(" ");

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`;

  return (
    <div className="flex rounded-lg h-12 w-12 bg-primary text-lg font-bold text-white">
      <div className="m-auto">{initials}</div>
    </div>
  );
}

export default AvatarName;
