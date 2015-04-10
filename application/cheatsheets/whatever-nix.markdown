---
layout: cheatsheet
---

# whatever-nix server setup

#### [http://askubuntu.com/questions/46424/adding-ssh-keys-to-authorized-keys](Adding keys to authorized_keys)

{% highlight bash %}

## Do something here...

{% endhighlight %}

#### [Generating SSH Key](https://help.github.com/articles/generating-ssh-keys/)

{% highlight bash %}

## SSH Keygeneration Steps

> cd ~/.ssh
> ssh-keygen -t rsa -C "your_email@example.com"
> [Enter Passphrase]
> eval "$(ssh-agent -s)"
> ssh-add ~/.ssh/id_rsa
> pbcopy < ~/.ssh/id_rsa.pub

## You can now use this public key generated.

{% endhighlight %}


#### Config

{% highlight bash %}

Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa_your_key_github

Host bitbucket.org
  HostName bitbucket.org
  User git
  IdentityFile ~/.ssh/id_rsa_your_key_bitbucket

{% endhighlight %}

#### [Installation of NodeJs Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server)


#### Managing Deployment Keys

https://developer.github.com/guides/managing-deploy-keys/


