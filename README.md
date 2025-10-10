## 🧠 **Lägg till `update-branch` som globalt Git-alias**

### Stå i PowerShell 7 eller Git Bash och kör:

```bash
git config --global alias.update-branch '!f() { branch=$(git rev-parse --abbrev-ref HEAD); if [ "$branch" = "main" ]; then echo "Du står på main – byt först till en feature-branch."; exit 1; fi; echo "Uppdaterar och pushar branch: $branch"; git checkout main && git pull origin main && git checkout "$branch" && git pull --rebase origin main && git push origin "$branch" && echo "✅ Branch $branch uppdaterades och pushades framgångsrikt!";}; f'
```

✅ Kör sedan följande för att kontrollera att aliaset har lagts till korrekt:

- **PowerShell:**

```bash
code $env:USERPROFILE\.gitconfig
```

- **Git Bash:**

```bash
code ~/.gitconfig
```

Aliaset ska nu synas under `[alias]` i filen som öppnas. Du kan därefter använda kommandot:

```bash
git update-branch
```

för att uppdatera din feature-branch med senaste `main` innan du pushar.

---
Musse är med!