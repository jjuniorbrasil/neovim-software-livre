Você pode instalar o Neovim a partir de
[<u>download</u>](#instalar-por-download),
[<u>pacote</u>](#instalar-por-pacote) ou
[<u>código-fonte</u>](#instalar-a-partir-do-código-fonte) em apenas
alguns segundos.

- Para iniciar o Neovim, execute o `nvim` (não o `neovim`).

  - [<u>Descubra
    plugins</u>](https://github.com/neovim/neovim/wiki/Related-projects#plugins).

- Antes de atualizar para uma nova versão, **verifique as**
  [<u>Mudanças Incompatíveis (Breaking
  Changes)</u>](https://neovim.io/doc/user/news.html#news-breaking).  

- Para configuração (vimrc) veja as [<u>Perguntas Frequentes (
  FAQ)</u>](https://neovim.io/doc/user/faq.html#faq-general).




Instalar por Download
=====================


Os downloads estão disponíveis na página [de <u>Lançamentos
(Releases)</u>](https://github.com/neovim/neovim/releases).

- Última [<u>versão estável  
  </u>](https://github.com/neovim/neovim/releases/latest)

  - [<u>macOS x86_64  
    </u>](https://github.com/neovim/neovim/releases/latest/download/nvim-macos-x86_64.tar.gz)

  - [<u>macOS arm64  
    </u>](https://github.com/neovim/neovim/releases/latest/download/nvim-macos-arm64.tar.gz)

  - [<u>Linux x86_64  
    </u>](https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz)

  - [<u>Linux arm64  
    </u>](https://github.com/neovim/neovim/releases/latest/download/nvim-linux-arm64.tar.gz)

  - [<u>Windows  
    </u>](https://github.com/neovim/neovim/releases/latest/download/nvim-win64.msi)

- Última [<u>versão de desenvolvimento (prerelease)  
  </u>](https://github.com/neovim/neovim/releases/nightly)


Instalar por Pacote
===================

Os pacotes estão listados abaixo. (Você também pode [<u>compilar o
Neovim a partir do
código-fonte</u>](https://github.com/neovim/neovim/blob/master/INSTALL.md#install-from-source).)


## Windows

É necessário Windows 8 ou superior. Windows 7 ou mais antigo não é
suportado.

#### [Winget](https://docs.microsoft.com/en-us/windows/package-manager/winget/)

- **Versão estável:**
  `winget install Neovim.Neovim`

#### [Chocolatey](https://chocolatey.org/)

- **Versão estável:**
  `choco install neovim` (use -y para pular confirmações automaticamente)

- **Versão de desenvolvimento:**
  `choco install neovim --pre`

#### [Scoop](https://scoop.sh/)
```
scoop bucket add main
scoop install neovim
```
- **Versão estável:**
  `scoop install neovim`

Várias interfaces gráficas (GUIs) para Neovim estão disponíveis no Scoop
(extras):  
[<u>scoop.sh/#/apps?q=neovim</u>](https://scoop.sh/#/apps?q=neovim)

### Arquivos pré-compilados

1.  Se você não tiver `VCRUNTIME140.dll`, instale o [<u>Visual Studio 2015
    C++
    redistribuível</u>](https://support.microsoft.com/en-us/kb/2977003)
    (escolha x86_64 ou x86 conforme seu sistema).

2.  Escolha um pacote (**nvim-winXX.zip**) na [<u>página de
    releases</u>](https://github.com/neovim/neovim/releases).

3.  Descompacte o arquivo ZIP. Qualquer local serve; não é necessário
    ser administrador.

    - O `\$VIMRUNTIME` será configurado automaticamente para esse local.

4.  Execute o `nvim.exe` a partir do terminal.

**Passos opcionais:**

- Adicione a pasta `bin` (ex.: `C:\Program Files\nvim\bin`) ao seu PATH

  - Isso permite que você execute o `nvim` de qualquer lugar no terminal.

- Se `:set spell` não funcionar, crie a pasta:
  `%LOCALAPPDATA%/nvim-data/site/spell`. Depois, você pode copiar seus
  arquivos de verificação ortográfica (spell) para lá (para inglês,
  estão localizados
  [<u>aqui</u>](https://github.com/neovim/neovim/tree/master/runtime/spell)
  e
  [<u>aqui</u>](https://github.com/vim/vim/blob/master/runtime/spell/en.utf-8.sug)).

- Para plugins Python,você precisa do módulo `pynvim`. É recomendado usar
  ambientes virtuais (virtual envs). Depois de ativar o ambiente
  virtual, execute: `pip install pynvim` (em ambos). Edite seu `init.vim`
  para incluir o caminho do Python do ambiente virtual:  
 ```vim
 let g:python3_host_prog='C:/Users/foo/Envs/neovim3/Scripts/python.exe'
```
  - Execute :`checkhealth` e veja `:help provider-python`.

<!-- -->

- **init.vim (vimrc):** Se você já tem o Vim instalado, pode copiar
 ` %userprofile%\\vimrc` para `%userprofile%\AppData\Local\nvim\init.vim` e
  usar sua configuração atual.

### 

## macOS / OS X

###  Arquivos pré-compilados:

A página de [<u>Lançamentos
(Releases)</u>](https://github.com/neovim/neovim/releases) fornece
binários prontos para macOS 10.15+.

Para x86_64 :
```
curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos-x86_64.tar.gz
tar xzf nvim-macos-x86_64.tar.gz
./nvim-macos-x86_64/bin/nvim
```
Para arm64 :
```
curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim-macos-arm64.tar.gz
tar xzf nvim-macos-arm64.tar.gz
./nvim-macos-arm64/bin/nvim
```
### [Homebrew](https://brew.sh/) (macOS ou Linux)
```
brew install neovim
```
###  [MacPorts](https://www.macports.org/)
```
sudo port selfupdate
sudo port install neovim
```
## Linux

### **Arquivos pré-compilados:**

A página de [<u>Releases</u>](https://github.com/neovim/neovim/releases)
fornece binários prontos para sistemas Linux
```
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.tar.gz
sudo rm -rf /opt/nvim
sudo tar -C /opt -xzf nvim-linux-x86_64.tar.gz
```
Adicione ao seu arquivo de configuração do shell (`~/.bashrc`,
`~/.zshrc`,...):
```
export PATH="\$PATH:/opt/nvim-linux-x86_64/bin"
```
### AppImage (pacote "universal" para Linux):

A página de [<u>Lançamentos
(Releases)</u>](https://github.com/neovim/neovim/releases) oferece um
[<u>AppImage</u>](https://appimage.org/) que funciona na maioria das
distribuições Linux. Não é necessário instalar, basta baixar o arquivo
`nvim-linux-x86_64.appimage` e executá-lo ( Pode não funcionar se sua
distribuição tiver mais de 4 anos de desatualização).

As instruções a seguir assumem uma arquitetura `x86_64`.  
Se você usa Linux em ARM, substitua por `arm64`.
```
curl -LO https://github.com/neovim/neovim/releases/latest/download/nvim-linux-x86_64.appimage
chmod u+x nvim-linux-x86_64.appimage
./nvim-linux-x86_64.appimage
```
Para disponibilizar o Neovim globalmente:
```
mkdir -p /opt/nvim
mv nvim-linux-x86_64.appimage /opt/nvim/nvim
```
Adicione a seguinte linha no arquivo de configuração do seu shell
(`~/.bashrc`, `~/.zshrc`, etc.):
```
export PATH="\$PATH:/opt/nvim/"
```
 Se o comando `./nvim-linux-x86_64.appimage` falhar, tente:
```sh
./nvim-linux-x86_64.appimage --appimage-extract
./squashfs-root/AppRun --version

# Opcional: Disponibilizando o Neovim globalmente
sudo mv squashfs-root /
sudo ln -s /squashfs-root/AppRun /usr/bin/nvim
nvim
```
### Arch Linux

O Neovim pode ser instalado a partir do repositório da comunidade:
```
sudo pacman -S neovim
```
Alternativamente, o Neovim também pode ser instalado usando o PKGBUILD
[<u>`neovim-git`</u>](https://aur.archlinux.org/packages/neovim-git),
disponível no
[<u>AUR</u>](https://wiki.archlinux.org/index.php/Arch_User_Repository).

Da mesma forma, as compilações noturnas
<span class="mark"></span>(**<span class="mark">nightly builds</span>**)
do Neovim podem ser instaladas usando o PKGBUILD
[<u>`neovim-nightly-bin`</u>](https://aur.archlinux.org/packages/neovim-nightly-bin),
também disponível no
[<u>AUR</u>](https://wiki.archlinux.org/index.php/Arch_User_Repository).

O módulo Python está disponível no repositório da comunidade:
```
sudo pacman -S python-pynvim
```
Os módulos Ruby (atualmente suportados apenas no `neovim-git`) estão
disponíveis no AUR como
[<u>`ruby-neovim`</u>](https://aur.archlinux.org/packages/ruby-neovim).

### CentOS 8 / RHEL 8

O Neovim está disponível através do [<u>EPEL (Extra Packages for
Enterprise Linux)</u>](https://fedoraproject.org/wiki/EPEL)
```
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
yum install -y neovim python3-neovim
```
### Clear Linux OS

O Neovim está disponível no [<u>pacote</u>
<u>neovim</u>](https://github.com/clearlinux/clr-bundles/blob/master/bundles/neovim):

sudo swupd bundle-add neovim

O suporte ao Python (`:python`) está disponível se o [<u>pacote</u>
<u>python-basic</u>](https://github.com/clearlinux/clr-bundles/blob/master/bundles/python-basic)
estiver instalado:
```
sudo swupd bundle-add python-basic
```
### Debian

O Neovim está no
[<u>Debian</u>](https://packages.debian.org/search?keywords=neovim):

sudo apt-get install neovim

O suporte a Python (`:python`) pode ser instalado via gerenciador de
pacotes no Debian Unstable:
```
sudo apt-get install python3-neovim
```
###  Exherbo Linux

*Exhereses* para as versões de desenvolvimento e lançadas estão
disponíveis no repositório `::medvid` O cliente Python (com interface
GTK+ incluída) e a interface Qt5 também estão disponíveis como opções:
```
cave resolve app-editors/neovim --take dev-python/neovim-python --takeapp-editors/neovim-qt
```
### Fedora

O Neovim está disponível no
[<u>Fedora</u>](https://src.fedoraproject.org/rpms/neovim) desde o
Fedora 25:
```
sudo dnf install -y neovim python3-neovim
```
<span class="mark">Você também pode obter as</span> compilações noturnas
(<span class="mark">nightly builds</span>) <span class="mark">do git
master pelo [<u>sistema automatizado de compilação
Copr</u>](https://copr.fedoraproject.org/coprs/agriffis/neovim-nightly/):</span>
```
dnf copr enable agriffis/neovim-nightly
dnf install -y neovim python3-neovim
```
### Flatpak

Você pode encontrar o Neovim no
[<u>Flathub</u>](https://flathub.org/apps/details/io.neovim.nvim).
Supondo que você já tenha o Flatpak
[<u>configurado</u>](https://flatpak.org/setup/):
```
flatpak install flathub io.neovim.nvim
flatpak run io.neovim.nvim
```
Você pode adicionar `/var/lib/flatpak/exports/bin` (ou
`~/.local/share/flatpak/exports/bin` se usou `--user`) no `\$PATH` e executar
com `io.neovim.nvim`.

O Neovim instalado via Flatpak procura o arquivo `init.vim` em
`~/.var/app/io.neovim.nvim/config/nvim` ao invés de` ~/.config/nvim`

### Gentoo Linux

Um ebuild está disponível no repositório oficial do Portage do Gentoo.
```
emerge -a app-editors/neovim
```
### GNU Guix

O Neovim pode ser instalado com:
```
guix install neovim
```
### GoboLinux

O Neovim pode ser instalado com:
```
sudo -H Compile NeoVim
```
##  Nix / NixOS

O Neovim pode ser instalado com:
```
nix-env -iA nixpkgs.neovim
```
Ou,alternativamente, se você usa flakes:
```
nix profile install nixpkgs#neovim
```
###  Mageia 7
```
urpmi neovim
```
Para instalar os módulos Python:
```
urpmi python3-pynvim
```
### Makedeb Package Repository (MPR)

O Neovim está disponível no
[<u>MPR</u>](https://mpr.makedeb.org/packages/neovim). Para instalar:
```
git clone https://mpr.makedeb.org/neovim
cd neovim/
makedeb -si
```
### OpenSUSE

Instale o Neovim com:
```
sudo zypper in neovim
```
Para os módulos Python:
```
sudo zypper in python-neovim python3-neovim
```
### PLD Linux

O Neovim está no [<u>PLD
Linux</u>](https://github.com/pld-linux/neovim):
```
poldek -u neovim
poldek -u python-neovim python3-neovim
poldek -u python-neovim-gui python3-neovim-gui
```
### Slackware

Veja o [<u>Neovim no
SlackBuilds</u>](https://slackbuilds.org/apps/neovim/) (não há comando
específico listado).

### Source Mage

O Neovim pode ser instalado com o gerenciador Sorcery:
```
cast neovim
```
### Solus

O Neovim pode ser instalado com o gerenciador padrão do Solus (eopkg):
```
sudo eopkg install neovim
```
### Snap

Neovim de desenvolvimento (nightly) e estável estão disponíveis na
[<u>Snap Store</u>](https://snapcraft.io/nvim).

**Versão estável:**
```sh
sudo snap install nvim --classic
```
**Versão de desenvolvimento (Nightly Builds):**
```sh
sudo snap install --edge nvim --classic
```
### Ubuntu

Assim como no Debian, o Neovim está no
[<u>Ubuntu</u>](https://packages.ubuntu.com/search?keywords=neovim).
```
sudo apt install neovim
```
O suporte a Python (`:python`) geralmente é instalado automaticamente:
```
sudo apt install python3-neovim
```
O Neovim foi adicionado a um “Personal Package Archive” (PPA). Isso
permite que você o instale usando o `apt-get`.

Acesse os links dos PPAs para verificar quais versões do Ubuntu estão
atualmente disponíveis:

- [<u>Versão estável  
  </u>](https://launchpad.net/~neovim-ppa/+archive/ubuntu/stable)

- [<u>Versão instável  
  </u>](https://launchpad.net/~neovim-ppa/+archive/ubuntu/unstable)

**Importante:** O time do Neovim **não mantém os pacotes do PPA**. Para
problemas ou dúvidas específicas sobre o PPA, entre em contato
diretamente com:  
[<u>https://launchpad.net/~neovim-ppa</u>](https://launchpad.net/~neovim-ppa)

Para usar o comando **add-apt-repository**, você pode precisar instalar:
```
sudo apt-get install software-properties-common
```
Se estiver usando uma versão mais antiga do Ubuntu, use:
```
sudo apt-get install python-software-properties
```
Execute os seguintes comandos:
```
sudo add-apt-repository ppa:neovim-ppa/stable
sudo apt-get update
sudo apt-get install neovim
```
Pré-requisitos para os módulos Python:
```
sudo apt-get install python-dev python-pip python3-dev python3-pip
```
 Se estiver usando uma versão antiga do Ubuntu, você deve usar:
```
sudo apt-get install python-dev python-pip python3-dev
sudo apt-get install python3-setuptools
sudo easy_install3 pip
```
### Void Linux

O Neovim pode ser instalado com o gerenciador xbps:
```
sudo xbps-install -S neovim
```
###  Alpine Linux

O Neovim pode ser instalado com o gerenciador apk:
```
sudo apk add neovim
```
## BSD

### FreeBSD:

<span class="mark">O Neovim pode ser instalado usando [<u>o
`pkg(8)`:</u>](https://www.freebsd.org/cgi/man.cgi?query=pkg&sektion=8&n=1)</span>
```
pkg install neovim
```
Ou a partir da [<u>árvore de
ports</u>](https://www.freshports.org/editors/neovim/):
```
cd /usr/ports/editors/neovim/ && make install clean
```
Para instalar os módulos Python pynvim usando o
[<u>`pkg(8)`</u>](https://www.freebsd.org/cgi/man.cgi?query=pkg&sektion=8&n=1),
execute:
```
pkg install py36-pynvim

```
### OpenBSD:

 o Neovim pode ser instalado usando o [<u>`pkg_add(1)`</u>](https://man.openbsd.org/pkg_add):
```
pkg_add neovim
```
ou a partir da [<u>árvore de
ports</u>](https://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/editors/neovim/):
```
cd /usr/ports/editors/neovim/ && make install
```
## Android

[<u>Termux</u>](https://github.com/termux/termux-app) oferece um pacote
para o Neovim:

pkg install neovim

Instalar a partir do código-fonte
=================================

Se não houver um pacote para sua plataforma, você pode compilar o Neovim
a partir do código-fonte. Veja o arquivo
[<u>BUILD.md</u>](http://build.md) para detalhes. Se você já tiver os
[<u>pré-requisitos</u>](https://github.com/neovim/neovim/blob/master/BUILD.md#build-prerequisites)
instalados, a compilação é simples:
```
make CMAKE_BUILD_TYPE=Release
sudo make install
```
 Para sistemas Unix-like, isso instala o Neovim em `/usr/local`, enquanto no Windows, em `C:\Program Files`. No entanto, isso pode complicar o processo de desinstalação. O exemplo a seguir evita esse problema ao isolar a instalação dentro de `\$HOME/neovim`:
```
rm -r build/ \# limpa o cache do CMake
make CMAKE_EXTRA_FLAGS="-DCMAKE_INSTALL_PREFIX=\$HOME/neovim"
make install
export PATH="\$HOME/neovim/bin:\$PATH"
```
##  Desinstalar

Existe um alvo no CMake para desinstalar após o `make install`
```sh
sudo cmake --build build/ --target uninstall
```
 Alternativamente, basta excluir manualmente os artefatos do `CMAKE_INSTALL_PREFIX`
```sh
sudo rm /usr/local/bin/nvim
sudo rm -r /usr/local/share/nvim/
```