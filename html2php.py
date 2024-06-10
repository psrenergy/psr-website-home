import os
from bs4 import BeautifulSoup

# Defina o caminho para a pasta de entrada e saída
input_folder = os. getcwd()
output_folder = input_folder + '/php'

# Verifica se a pasta de saída existe, se não, cria
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Função para converter HTML para PHP
def convert_html_to_php(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f, 'html.parser')

    body_content = soup.find('body')
    if body_content is None:
        body_content = ''  # Se não encontrar uma seção body, retorna string vazia
    else:
        body_content = body_content.decode_contents()

    php_template = f'''<?php
                        /*
                        Template Name: PSR Analytics OptGen
                        */
                        get_header();
                        ?>
                        {body_content}
                        <?php get_footer(); ?>
                        '''
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(php_template)

# Varre todos os arquivos HTML na pasta de entrada
for filename in os.listdir(input_folder):
    if filename.endswith('.html'):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, 'analytics-' + filename.replace('.html', '.php'))
        convert_html_to_php(input_path, output_path)
        print(f'Converted: {input_path} to {output_path}')

print('Conversão concluída!')