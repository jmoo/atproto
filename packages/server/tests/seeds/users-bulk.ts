import { SeedClient } from './client'

export default async (sc: SeedClient) => {
  // @TODO when these are run in parallel, seem to get an intermittent
  // "TypeError: fetch failed" while running the tests.
  for (const { username, displayName } of users) {
    await sc.createAccount(username, {
      username: username,
      password: 'password',
      email: `${username}@bsky.app`,
    })
    if (displayName !== null) {
      await sc.createProfile(sc.dids[username], displayName, '')
    }
  }
  return sc
}

const users = [
  { username: 'Silas77', displayName: 'Tanya Denesik' },
  { username: 'Nicolas_Krajcik10', displayName: null },
  { username: 'Lennie.Strosin', displayName: null },
  { username: 'Aliya.Hodkiewicz', displayName: 'Carlton Abernathy IV' },
  { username: 'Jeffrey.Sawayn87', displayName: 'Patrick Sawayn' },
  { username: 'Kaycee66', displayName: null },
  { username: 'Adrienne49', displayName: 'Kim Streich' },
  { username: 'Magnus53', displayName: 'Sally Funk' },
  { username: 'Charles_Spencer', displayName: null },
  { username: 'Elta48', displayName: 'Dr. Lowell DuBuque' },
  { username: 'Tressa_Senger', displayName: null },
  { username: 'Marietta.Zboncak', displayName: null },
  { username: 'Alexander_Hickle', displayName: 'Winifred Harber' },
  { username: 'Rodger.Maggio24', displayName: 'Yolanda VonRueden' },
  { username: 'Janiya48', displayName: 'Miss Terrell Ziemann' },
  { username: 'Cayla_Marquardt39', displayName: 'Rachel Kshlerin' },
  { username: 'Jonathan_Green', displayName: 'Erica Mertz' },
  { username: 'Brycen_Smith', displayName: null },
  { username: 'Leonel.Koch43', displayName: 'Karl Bosco IV' },
  { username: 'Fidel.Rath', displayName: null },
  { username: 'Raleigh_Metz', displayName: null },
  { username: 'Kim41', displayName: null },
  { username: 'Roderick.Dibbert', displayName: null },
  { username: 'Alec_Bergnaum', displayName: 'Cody Berge' },
  { username: 'Sven70', displayName: null },
  { username: 'Ola.OConnell', displayName: null },
  { username: 'Chauncey_Klein', displayName: 'Kelvin Klein' },
  { username: 'Ariel_Krajcik', displayName: null },
  { username: 'Murphy35', displayName: 'Mrs. Clifford Mertz' },
  { username: 'Joshuah.Parker11', displayName: null },
  { username: 'Dewitt.Wunsch', displayName: null },
  { username: 'Kelton.Nitzsche43', displayName: null },
  { username: 'Dock.Mann91', displayName: 'Miss Danielle Weber' },
  { username: 'Herman.Gleichner95', displayName: 'Kelli Schinner III' },
  { username: 'Gerda_Marquardt', displayName: 'Myron Wolf' },
  { username: 'Jamil_Batz', displayName: null },
  { username: 'Hilario84', displayName: null },
  { username: 'Kayli_Bode', displayName: 'Miss Floyd McClure' },
  { username: 'Elouise28', displayName: 'Alberta Fay' },
  { username: 'Leann49', displayName: null },
  { username: 'Javon24', displayName: null },
  { username: 'Polly.Shanahan45', displayName: null },
  { username: 'Rosamond38', displayName: 'Karl Goyette' },
  { username: 'Fredrick.Mueller', displayName: null },
  { username: 'Reina_Runte33', displayName: 'Pablo Schmidt' },
  { username: 'Bianka33', displayName: null },
  { username: 'Carlos6', displayName: null },
  { username: 'Jermain.Smith', displayName: 'Eileen Stroman' },
  { username: 'Gina97', displayName: null },
  { username: 'Kiera97', displayName: null },
  { username: 'Savannah_Botsford', displayName: 'Darnell Kuvalis' },
  { username: 'Lilliana_Waters', displayName: null },
  { username: 'Hailey_Stroman', displayName: 'Elsa Schaden' },
  { username: 'Dortha_Terry', displayName: 'Nicole Bradtke' },
  { username: 'Hank.Powlowski32', displayName: null },
  { username: 'Ervin.Daugherty', displayName: null },
  { username: 'Nannie18', displayName: null },
  { username: 'Gilberto.Watsica65', displayName: 'Ms. Ida Wilderman' },
  { username: 'Kara.Zieme58', displayName: 'Andres Towne' },
  { username: 'Crystal.Boyle', displayName: null },
  { username: 'Tobin63', displayName: 'Alex Johnson' },
  { username: 'Isai.Kunze72', displayName: 'Marion Dickinson' },
  { username: 'Paris.Swift', displayName: null },
  { username: 'Nestor90', displayName: 'Travis Hoppe' },
  { username: 'Aliyah_Flatley12', displayName: 'Loren Krajcik' },
  { username: 'Maiya42', displayName: null },
  { username: 'Dovie33', displayName: null },
  { username: 'Kendra_Ledner80', displayName: 'Sergio Hane' },
  { username: 'Greyson.Tromp3', displayName: null },
  { username: 'Precious_Fay', displayName: null },
  { username: 'Kiana_Schmitt39', displayName: null },
  { username: 'Rhianna_Stamm29', displayName: null },
  { username: 'Tiara_Mohr', displayName: null },
  { username: 'Eleazar.Balistreri70', displayName: 'Gordon Weissnat' },
  { username: 'Bettie.Bogisich96', displayName: null },
  { username: 'Lura.Jacobi55', displayName: null },
  { username: 'Santa_Hermann78', displayName: 'Melissa Johnson' },
  { username: 'Dylan61', displayName: null },
  { username: 'Ryley_Kerluke', displayName: 'Alexander Purdy' },
  { username: 'Moises.Bins8', displayName: null },
  { username: 'Angelita.Schaefer27', displayName: null },
  { username: 'Natasha83', displayName: 'Dean Romaguera' },
  { username: 'Sydni48', displayName: null },
  { username: 'Darrion91', displayName: 'Jeanette Weimann' },
  { username: 'Reynold.Ortiz', displayName: null },
  { username: 'Hassie.Schuppe', displayName: 'Rita Zieme' },
  { username: 'Clark_Stehr8', displayName: 'Sammy Larkin' },
  { username: 'Preston_Harris', displayName: 'Ms. Bradford Thiel' },
  { username: 'Benedict.Schulist', displayName: 'Todd Stark' },
  { username: 'Alden_Wolff22', displayName: null },
  { username: 'Joel.Gulgowski', displayName: null },
  { username: 'Joanie56', displayName: 'Ms. Darin Cole' },
  { username: 'Israel_Hermann0', displayName: 'Wilbur Schuster' },
  { username: 'Tracy56', displayName: null },
  { username: 'Kyle72', displayName: null },
  { username: 'Gunnar_Dare70', displayName: 'Mrs. Angelo Keeling' },
  { username: 'Justus58', displayName: null },
  { username: 'Brooke24', displayName: 'Clint Ward' },
  { username: 'Angela.Morissette', displayName: 'Jim Kertzmann' },
  { username: 'Amy_Bins', displayName: 'Angelina Hills' },
  { username: 'Susanna81', displayName: null },
  { username: 'Jailyn_Hettinger50', displayName: 'Sheldon Ratke' },
  { username: 'Wendell_Hansen54', displayName: null },
  { username: 'Jennyfer.Spinka', displayName: 'Leticia Blick' },
  { username: 'Alexandrea31', displayName: 'Leslie Von' },
  { username: 'Hazle_Davis', displayName: 'Ella Farrell' },
  { username: 'Alta6', displayName: null },
  { username: 'Sherwood4', displayName: 'Dr. Hattie Nienow I' },
  { username: 'Marilie24', displayName: 'Gene Howell' },
  { username: 'Jimmie_Feeney82', displayName: null },
  { username: 'Trisha_OHara', displayName: null },
  { username: 'Jake_Schuster33', displayName: 'Raymond Price' },
  { username: 'Shane_Torphy52', displayName: 'Sadie Carter' },
  { username: 'Nakia_Kuphal8', displayName: null },
  { username: 'Lea_Trantow', displayName: null },
  { username: 'Joel62', displayName: 'Veronica Nitzsche' },
  { username: 'Roosevelt33', displayName: 'Jay Moen' },
  { username: 'Talon_OKeefe85', displayName: null },
  { username: 'Herman_Dare', displayName: 'Eric White' },
  { username: 'Flavio_Fay', displayName: 'John Lindgren' },
  { username: 'Elyse.Prosacco', displayName: null },
  { username: 'Jessyca.Wiegand23', displayName: 'Debra Lockman' },
  { username: 'Ara_Spencer41', displayName: null },
  { username: 'Frederic_Fadel', displayName: null },
  { username: 'Zora_Gerlach', displayName: 'Noel Hansen' },
  { username: 'Spencer4', displayName: 'Marjorie Gorczany' },
  { username: 'Gage_Wilkinson33', displayName: 'Preston Schoen V' },
  { username: 'Kiley_Runolfsson1', displayName: null },
  { username: 'Ramona80', displayName: 'Sylvia Dietrich' },
  { username: 'Rashad97', displayName: null },
  { username: 'Kylie76', displayName: 'Josefina Pfeffer' },
  { username: 'Alisha.Zieme', displayName: null },
  { username: 'Claud79', displayName: null },
  { username: 'Jairo.Kuvalis', displayName: 'Derrick Jacobson' },
  { username: 'Delfina_Emard', displayName: null },
  { username: 'Waino.Gutmann20', displayName: 'Wesley Kemmer' },
  { username: 'Arvid_Hermiston49', displayName: 'Vernon Towne PhD' },
  { username: 'Hans79', displayName: 'Rex Hartmann' },
  { username: 'Karlee.Greenholt40', displayName: null },
  { username: 'Nels.Cummings', displayName: null },
  { username: 'Andrew_Maggio', displayName: null },
  { username: 'Stephany75', displayName: null },
  { username: 'Alba.Lueilwitz', displayName: null },
  { username: 'Fermin47', displayName: null },
  { username: 'Milo_Quitzon3', displayName: null },
  { username: 'Eudora_Dietrich4', displayName: 'Carol Littel' },
  { username: 'Uriel.Witting12', displayName: 'Sophia Schmidt' },
  { username: 'Reuben.Stracke48', displayName: 'Darrell Walker MD' },
  { username: 'Letitia.Sawayn11', displayName: 'Mrs. Sophie Reilly' },
  { username: 'Macy_Schaden', displayName: 'Lindsey Klein' },
  { username: 'Imelda61', displayName: 'Shannon Beier' },
  { username: 'Oswald_Bailey', displayName: 'Angel Mann' },
  { username: 'Pattie.Fisher34', displayName: null },
  { username: 'Loyce95', displayName: 'Claude Tromp' },
  { username: 'Melyna_Zboncak', displayName: null },
  { username: 'Rowan_Parisian', displayName: 'Mr. Veronica Feeney' },
  { username: 'Lois.Blanda20', displayName: 'Todd Rolfson' },
  { username: 'Turner_Balistreri76', displayName: null },
  { username: 'Dee_Hoppe65', displayName: null },
  { username: 'Nikko_Rosenbaum60', displayName: 'Joann Gutmann' },
  { username: 'Cornell.Romaguera53', displayName: null },
  { username: 'Zack3', displayName: null },
  { username: 'Fredrick41', displayName: 'Julius Kreiger' },
  { username: 'Elwyn62', displayName: null },
  { username: 'Isaias.Hirthe37', displayName: 'Louis Cremin' },
  { username: 'Ronaldo36', displayName: null },
  { username: 'Jesse34', displayName: 'Bridget Schulist' },
  { username: 'Darrel.Mills17', displayName: null },
  { username: 'Euna_Mayert92', displayName: 'Grant Lang II' },
  { username: 'Terrell92', displayName: null },
  { username: 'Alyson_Bogisich', displayName: 'Dana MacGyver' },
  { username: 'Nicolas65', displayName: null },
  { username: 'Bernita8', displayName: null },
  { username: 'Gunner23', displayName: 'Maggie DuBuque' },
  { username: 'Phoebe80', displayName: null },
  { username: 'Cory.Cruickshank', displayName: null },
  { username: 'Conor_Price', displayName: 'Ralph Daugherty III' },
  { username: 'Rae91', displayName: null },
  { username: 'Abigale.Cronin', displayName: null },
  { username: 'Aileen.Reilly90', displayName: 'Charles Stanton' },
  { username: 'Adrianna.Hansen6', displayName: 'Elbert Langworth IV' },
  { username: 'Pierre54', displayName: null },
  { username: 'Jaida_Stark62', displayName: 'Justin Stoltenberg MD' },
  { username: 'Wade.Witting', displayName: null },
  { username: 'Yvonne_Predovic5', displayName: 'Gregory Hamill' },
  { username: 'Spencer.DuBuque', displayName: null },
  { username: 'Randi44', displayName: null },
  { username: 'Maye_Grimes', displayName: null },
  { username: 'Margarette.Effertz', displayName: null },
  { username: 'Aimee98', displayName: null },
  { username: 'Jaren_Veum0', displayName: 'Dr. Omar Wolff' },
  { username: 'Ariel_Abbott54', displayName: 'Emanuel Powlowski' },
  { username: 'Mercedes23', displayName: null },
  { username: 'Jarrett_Orn', displayName: null },
  { username: 'Damion88', displayName: null },
  { username: 'Nayeli_Koss73', displayName: 'Johnny Lang' },
  { username: 'Cara.Wiegand69', displayName: null },
  { username: 'Gideon_OHara51', displayName: null },
  { username: 'Carolina_McDermott77', displayName: 'Latoya Windler' },
  { username: 'Danyka90', displayName: 'Hope Kub' },
]
