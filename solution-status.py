import os
import json
import pandas as pd

students = (
  'amanda.gabrielle',
  'lins.ana',
  'bruna.luiza',
  'claudio.cruz',
  'diogo.cardoso',
  'francisco.oliveira',
  'xavier.silva',
  'gustavo.galisa',
  'dionisio.ismael',
  'nascimento.vitor',
  'allan.keven',
  'kilson.alves',
  'lucas.gusmao',
  'serrano.lucas',
  'lucas.endress',
  'lacouth.patric',
  'andre.paulo',
  'jhonatha.sousa',
  'victor.japyassu',
  'wellington.silva.1',
  'yohanna.cavalcanti'
)
problems = os.listdir('w3c')
status = {}

for student in students:
  status[student] = {}
  for problem in problems:
    path = f'w3c/{problem}/{student}'
    status[student][problem] = os.path.isdir(path) or os.path.isfile(f'{path}.js')

# print(json.dumps(status, indent=4, sort_keys=True))

df = pd.DataFrame(status)
# print(df)
print(df[df==True].count(axis=0))
df[df==True].count(axis=0)
# print(df[df==True].count().sum())